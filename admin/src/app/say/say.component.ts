import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
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
  public loading = false;
  public total: Number = 1;
  constructor(
    private route: ActivatedRoute, 
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient, 
    private message: NzMessageService) {
  }
  ngOnInit() {
    this.getSayData(this.currentPage, this.pageSize)
  }
  getSayData(page, size){
    this.loading = true;
    const params = new HttpParams()
    .set('page', page).set('size', size)
    this.dataSource = this.http.get('/api/say',{ params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try{
        this.sayList = data.data
        this.currentPage = data.page
        this.pageSize = data.size
        this.total = data.totalPage
        this.loading = false
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
  handelDelete(id){
    this.http.delete(`/api/say/${id}`).pipe(map(res => res)).subscribe( 
      data => { 
        if(data['success'] === true){
          this.message.success('删除成功');
          this.getSayData(this.currentPage, this.pageSize);
        } else {
          this.message.error('删除失败') ;
        }
      },
      error => {
        console.log("Error", error); 
      })
  }
  ngAfterViewInit(){
    this.breadcrumbService.loadRoutes(this.route.data['value'])
  }
}
