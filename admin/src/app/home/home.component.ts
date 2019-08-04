import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentRoute = []
  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {
  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.breadcrumbService.loadRoutes(this.route.data['value'])
  }
}
