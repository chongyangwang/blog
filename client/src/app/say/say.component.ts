import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent implements OnInit {
  public sayList: Observable<any>;
  public dataSource: Observable<any>;
  public paginationSizeOptions = [ 5, 10, 20, 30, 50 ]
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  public total: Number = 1;
  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit() {
     this.getSayData(this.currentPage, this.pageSize)
  }
  getSayData(page, size){
    const params = new HttpParams()
    .set('page', page).set('size', size)
    this.dataSource = this.http.get('/api/say',{ params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try{
        this.sayList = data.data
        this.currentPage = data.page
        this.pageSize = data.size
        this.total = data.totalPage
      } catch(err){
        console.log(err)
      }
    });
  }
  changePageIndex(pageIndex){
    this.currentPage = pageIndex;
    this.getSayData(this.currentPage, this.pageSize);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getSayData(this.currentPage, this.pageSize);
  }
}
