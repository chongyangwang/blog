import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  public recommendList: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/recommend').pipe(map(res=>res)).subscribe((data)=>{
      this.recommendList = data
    })
  }
  handelJumpRecommend(address){
    window.location.href = address
  }

}
