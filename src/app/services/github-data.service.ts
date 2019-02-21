import { Injectable } from "@angular/core";
import axios from "axios";
import { Subject } from "rxjs";

const req = axios.create({ baseURL: "https://api.github.com/users/" });

export interface Result {
  type: string;
  count: number;
}
@Injectable({
  providedIn: "root"
})
export class GithubDataService {
  public subject = new Subject<{ state: "done" | "loading"; payload?: any }>();
  public state = this.subject.asObservable();

  constructor() {}

  async getPieGraphData(user: string) {
    this.subject.next({ state: "loading" });

    let ress: any[] = [];
    for (let i = 0; ; i++) {
      const res = await req
        .get(user + "/repos?per_page=100&page=" + i)
        .catch(console.log);
      if (!res) break;
      if ((res as any).data.length === 0) break;
      ress.push((res as any).data);
    }
    if (ress.length === 0) return;
    const res = (ress as any).flatMap(item => item);

    const languages = res.flatMap(item => {
      if (item.language) {
        return [item.language];
      } else {
        return [];
      }
    });

    let results: Result[] = [];
    const map: { [key: string]: number } = {};
    languages.forEach(lang => {
      if (Object.keys(map).includes(lang)) {
        map[lang]++;
      } else {
        map[lang] = 1;
      }
    });
    Object.keys(map).map(key => results.push({ type: key, count: map[key] }));
    results = results.sort((a, b) => b.count - a.count);
    this.subject.next({ state: "done", payload: results });
    return results;
  }
}
