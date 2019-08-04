import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  validateForm: FormGroup;
  public archiveList: Observable<any>;
  public dataSource: Observable<any>;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  public paginationSizeOptions = [ 5, 10, 20, 30, 50 ]
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  public total: Number = 1;
  constructor(
    private http: HttpClient, 
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit() {
    this.validateForm = this.fb.group({
      cat_id: ['']
    })
    this.getCategoryData()
    this.getArchiveData(this.currentPage, this.pageSize, this.validateForm.value)
  }
  getCategoryData(){
    this.categorySource = this.http.get('/api/category').pipe(map(res => res));
    this.categorySource.subscribe(data => {
      try{
        this.categoryList = data.data
      } catch(err){
        console.log(err)
      }
    });
  }
  getArchiveData(page, size, searchQuery){
    const params = new HttpParams()
    .set('page', page).set('size', size)
    .set('cat_id', searchQuery.cat_id === null? '' : searchQuery.cat_id);
    this.dataSource = this.http.get('/api/archive',{ params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try{
        this.archiveList = data.data
        this.currentPage = data.page
        this.pageSize = data.size
        this.total = data.totalPage
      } catch(err){
        console.log(err)
      }
    });
  }
  getArchiveDataBySearch(searchQuery){
    this.currentPage = 1
    this.pageSize = 5
    this.getArchiveData(this.currentPage, this.pageSize, searchQuery);
  }
  changePageIndex(pageIndex){
    this.currentPage = pageIndex;
    this.getArchiveData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getArchiveData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  handelArticleDetail(id){
    this.router.navigate(['article-detail'], {
      queryParams: {
        'articleId': id,
        'name':'文章详情',
        'link': 'article-detail'
      }
    })
  }
  submitForm(): void {
    this.getArchiveDataBySearch(this.validateForm.value)
  }
}
