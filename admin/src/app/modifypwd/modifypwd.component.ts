import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';

@Component({
  selector: 'app-modifypwd',
  templateUrl: './modifypwd.component.html',
  styleUrls: ['./modifypwd.component.css']
})
export class ModifypwdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {
  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.breadcrumbService.loadRoutes(this.route.data['value'])
  }
}
