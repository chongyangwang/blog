import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css'],
})
export class ArticleUpdateComponent implements OnInit {
  artileId: any = '';
  public option: any;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  public froalaText: string = "My Document's Title";
  validateForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
    private datePipe: DatePipe
  ) {}
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
  ngOnInit() {
    this.option = {
      language: 'zh_cn', // 配置语言

      placeholderText: '请输入内容', // 文本框提示内容

      charCounterCount: true, // 是否开启统计字数

      charCounterMax: 4000, // 最大输入数

      codeMirror: false, // 高亮显示html代码

      codeMirrorOptions: {
        // 配置html代码参数
        tabSize: 4,
      },
    };
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      release_time: [null, [Validators.required]],
      cat_id: [null, [Validators.required]],
    });
    this.getData();
    this.getCategoryData();
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const bodyParams = this.validateForm.value;
      bodyParams.release_time = this.datePipe.transform(bodyParams.release_time, 'yyyy-MM-dd');
      bodyParams.content = this.froalaText;
      bodyParams.id = this.artileId;
      this.http
        .post('/api/article-update', bodyParams)
        .pipe(map(res => res))
        .subscribe(
          data => {
            if (data['success'] === true) {
              this.message.success('更新成功');
              this.router.navigate(['/layout/article']);
            } else {
              this.message.error('更新失败');
            }
          },
          error => {
            console.log('Error', error);
          }
        );
    }
  }
  getData() {
    this.route.queryParams.subscribe(params => {
      this.artileId = params['id'];
    });
    if (this.artileId) {
      const params = new HttpParams().set('article_id', this.artileId);
      this.http
        .get('/api/detail-article', { params })
        .pipe(map(res => res))
        .subscribe(data => {
          try {
            this.validateForm.value.title = data['data'][0].title;
            this.validateForm.value.cat_id = data['data'][0].cat_id;
            const release_time = this.datePipe.transform(data['data'][0].release_time, 'yyyy-MM-dd');
            this.validateForm = this.fb.group({
              title: [data['data'][0].title, [Validators.required]],
              release_time: [release_time, [Validators.required]],
              cat_id: [data['data'][0].cat_id, [Validators.required]],
            });
            this.froalaText = data['data'][0].content;
          } catch (err) {
            console.log(err);
          }
        });
    }
  }
  ngAfterViewInit() {
    this.breadcrumbService.loadRoutes(this.route.data['value']);
  }
}
