import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collectionList: [];
  dataSource: Observable<any>;
  validateForm: FormGroup;
  public loading = true;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  public paginationSizeOptions = [5, 10, 20, 30, 50];
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  public total: Number = 1;
  @ViewChild('banner')
  banner: any;
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      cat_id: [''],
    });
    // 获取收藏列表
    this.getCollectionData(this.currentPage, this.pageSize, this.validateForm.value);
    // 获取分类列表
    this.getCategoryData();
  }
  getCollectionData(page, size, searchQuery) {
    this.loading = true;
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('cat_id', searchQuery.cat_id === null ? '' : searchQuery.cat_id);
    this.dataSource = this.http.get('/api/collection', { params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try {
        this.collectionList = data.data;
        this.currentPage = data.page;
        this.pageSize = data.size;
        this.total = data.totalPage;
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    });
  }
  getCategoryData() {
    this.categorySource = this.http.get('/api/category').pipe(map(res => res));
    this.categorySource.subscribe(data => {
      try {
        this.categoryList = data.data;
      } catch (err) {
        console.log(err);
      }
    });
  }
  getCollectionDataBySearch(searchQuery) {
    this.currentPage = 1;
    this.pageSize = 5;
    this.getCollectionData(this.currentPage, this.pageSize, searchQuery);
  }
  changePageIndex(pageIndex) {
    this.currentPage = pageIndex;
    this.getCollectionData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getCollectionData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  submitForm(): void {
    this.getCollectionDataBySearch(this.validateForm.value);
  }
}
