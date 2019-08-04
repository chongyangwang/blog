import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  validateForm: FormGroup;
  public articleList: Observable<any>;
  public dataSource: Observable<any>;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  public paginationSizeOptions = [5, 10, 20, 30, 50];
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  public loading = false;
  public total: Number = 1;
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private message: NzMessageService
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      cat_id: [''],
    });
    // 获取文章列表
    this.getArticleData(this.currentPage, this.pageSize, this.validateForm.value);
    // 获取分类列表
    this.getCategoryData();
  }
  getArticleData(page, size, searchQuery) {
    this.loading = true;
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('cat_id', searchQuery.cat_id === null ? '' : searchQuery.cat_id);
    this.dataSource = this.http.get('/api/article', { params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try {
        this.articleList = data.data;
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
  getArticleDataBySearch(searchQuery) {
    this.currentPage = 1;
    this.pageSize = 5;
    this.getArticleData(this.currentPage, this.pageSize, searchQuery);
  }
  changePageIndex(pageIndex) {
    this.currentPage = pageIndex;
    this.getArticleData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getArticleData(this.currentPage, this.pageSize, this.validateForm.value);
  }
  handelDelete(id) {
    this.http
      .delete(`/api/article/${id}`)
      .pipe(map(res => res))
      .subscribe(
        data => {
          if (data['success'] === true) {
            this.message.success('删除成功');
            this.getArticleData(this.currentPage, this.pageSize, this.validateForm.value);
          } else {
            this.message.error('删除失败');
          }
        },
        error => {
          console.log('Error', error);
        }
      );
  }
  handelEdit(id) {
    this.router.navigate(['/layout/article-update'], { queryParams: { id: id } });
  }
  submitForm(): void {
    this.getArticleDataBySearch(this.validateForm.value);
  }
  ngAfterViewInit() {
    this.breadcrumbService.loadRoutes(this.route.data['value']);
  }
}
