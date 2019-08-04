import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public showBanner:Boolean = true
  public showBackTop:Boolean = false;
  constructor(private routerInfo: ActivatedRoute) {
    this.routerInfo.queryParams.subscribe((params) => {
      this.valuedateRoute(params)
    })
  }
  valuedateRoute(params){
    if(params.name && params.name!=='首页'){
      this.showBanner = false
    }else{
      if(params.articleId){
        this.showBanner = false
      } else {
        this.showBanner = true
      }
    }
  }
  ngAfterViewInit(){
    window.onscroll= () => {
      if(document.documentElement.scrollTop > 600){
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
    }
  }
}
