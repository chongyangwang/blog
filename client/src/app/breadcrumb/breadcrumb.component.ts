import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public currentRouteList:any= [{ 'name':'首页', 'link':'home' }];
  private routesList:any= [
    {
      'name': '首页',
      'link': 'home'
    },
    { 
      'name': '文章', 
      'link': 'article'
    },
    { 
      'name':'归档',
      'link': 'archive'
    },
    { 
      'name': '收藏',
      'link': 'collection', 
    },
    { 
      'name': '说说',
      'link': 'say'
    },
    { 
      'name': '文章详情',
      'link': 'articlew-detail'
    }
  ]
  constructor(private routerInfo: ActivatedRoute) {
    this.routerInfo.queryParams.subscribe((params) => {
      this.filterRoutes(params)
    })
  }
  filterRoutes(params){
    this.currentRouteList = [{ 'name':'首页', 'link':'home' }]
    if(params.name){
      if(params.name !== '首页'){
        for(let i=0;i<this.routesList.length;i++){
          if(params.name === this.routesList[i].name){
            this.currentRouteList.push(this.routesList[i])
            break;
          }
        }
      }
    }
  }
  ngOnInit() {
   
  }
}
