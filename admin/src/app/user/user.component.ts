import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public validateForm: FormGroup;
  public userList: Observable<any>;
  public dataSource: Observable<any>;
  public paginationSizeOptions = [ 5, 10, 20, 30, 50 ]
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  searchAddress: string[] = [];
  public loading = false;
  public total: Number = 1;
  public order_by_key: string = '';
  public filter_key : string = '';
  public listOfName = [{ text: '男', value: 'man' }, { text: '女', value: 'woman' }];
  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private http: HttpClient, 
    private message: NzMessageService,
    private breadcrumbService: BreadcrumbService){
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null],
    });
    this.getData(this.currentPage, this.pageSize)
  }
  getData(page, size){
    this.loading = true;
    const params = new HttpParams()
    .set('page', page).set('size', size)
    .set('order_by_key', this.order_by_key)
    .set('filter_key', this.filter_key);
    this.dataSource = this.http.get('/api/user', { params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try{
        this.userList = data.data
        this.currentPage = data.page
        this.pageSize = data.size
        this.total = data.totalPage
        this.loading = false
      } catch(err){
        console.log(err)
      }
    });
  }
  submitForm(): void {
    console.log('查询')
  }
  sort(a, b){
    this.order_by_key = b
    this.getData(this.currentPage, this.pageSize)
  }
  filter(a){
    if(a.length > 1){
      this.filter_key = a[0]
    }
    this.filter_key = a[0]
    this.getData(this.currentPage, this.pageSize)
  }
  changePageIndex(pageIndex){
    this.currentPage = pageIndex
    this.getData(this.currentPage, this.pageSize)
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getData(this.currentPage, this.pageSize)
  }
  handelDelete(id){
    this.http.delete(`/api/user/${id}`).pipe(map(res => res)).subscribe( 
      data => { 
        if(data['success'] === true){
          this.message.success('删除成功');
          this.getData(this.currentPage, this.pageSize);
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
