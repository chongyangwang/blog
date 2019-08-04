import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public routeList: any = [{
    url: 'home',
    name: '主页'
  }]
  loadRoutes(route: any) {
    /*不得已而为之*/
    setTimeout(()=>{
      this.routeList = [{
        url: 'home',
        name: '主页'
      }]
      if(route.name !== '主页'){
       this.routeList.push(route)
      }
      return this.routeList
    }, 200)
  }
  constructor() { }
}
