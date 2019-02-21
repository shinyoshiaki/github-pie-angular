import { Component, OnInit } from "@angular/core";
import { GithubDataService, Result } from "../../services/github-data.service";

@Component({
  selector: "app-language-list",
  templateUrl: "./language-list.component.html",
  styleUrls: ["./language-list.component.css"]
})
export class LanguageListComponent implements OnInit {
  data: Result[];

  constructor(private service: GithubDataService) {}

  ngOnInit() {
    this.service.state.subscribe(data => {
      switch (data.state) {
        case "done":
          this.data = data.payload;
          break;
      }
    });
  }
}
