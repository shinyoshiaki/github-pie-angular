import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";
import { GithubDataService, Result } from "../../services/github-data.service";

@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.css"]
})
export class PiechartComponent implements OnInit {
  width = 800;
  height = 480;
  data: Result[];
  pie: any;
  arc: any;
  colors: any;
  text: any;
  gTransform = `translate(${this.width / 2},${this.height / 2})`;
  textTransform: any;
  red = "red";
  search = false;
  loading = false;
  constructor(private service: GithubDataService) {}

  ngOnInit() {
    this.service.state.subscribe(data => {
      this.search = true;
      switch (data.state) {
        case "loading":
          this.loading = true;
          break;
        case "done":
          this.loading = false;
          this.data = data.payload;
          this.draw();
          break;
      }
    });
  }

  draw() {
    const radius = Math.min(this.width, this.height) / 2;

    const pie = d3
      .pie()
      .value((d: any) => d.count)
      .sort(null);

    const arc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(0);

    const colors = (data: any) =>
      d3.scaleOrdinal(d3.schemeCategory10).domain(data.map((d: any) => d.type));

    const text = d3
      .arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 50);

    this.pie = pie;
    this.arc = arc;
    this.colors = colors;
    this.text = text;
    this.textTransform = (d: any) => `translate(${text.centroid(d)})`;
  }
}
