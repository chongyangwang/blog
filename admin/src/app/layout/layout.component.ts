import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public isCollapsed: boolean;
  public triggerTemplate: any;
  public success: any;
  public error: any;
  constructor() {}

  ngOnInit() {}
}
