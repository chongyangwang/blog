import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-self-card",
  templateUrl: "./self-card.component.html",
  styleUrls: ["./self-card.component.css"]
})
export class SelfCardComponent implements OnInit {
  public num = "";
  constructor() {
    this.num = window.localStorage.getItem("article_num");
  }
  ngOnInit() {}
}
