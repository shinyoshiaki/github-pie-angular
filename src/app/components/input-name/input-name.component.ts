import { Component, OnInit } from "@angular/core";
import { GithubDataService } from "../../services/github-data.service";

@Component({
  selector: "app-input-name",
  templateUrl: "./input-name.component.html",
  styleUrls: ["./input-name.component.css"]
})
export class InputNameComponent implements OnInit {
  user = "";
  constructor(private service: GithubDataService) {}

  ngOnInit() {}

  async get() {
    console.log("get");
    const result = await this.service
      .getPieGraphData(this.user)
      .catch(console.log);
    if (result) {
      console.log({ result });
    }
  }
}
