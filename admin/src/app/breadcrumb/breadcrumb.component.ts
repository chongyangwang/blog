import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from '../service/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  constructor(public breadcrumbService: BreadcrumbService) {}
  ngOnInit() {}
}
