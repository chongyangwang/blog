import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router  } from "@angular/router";
import { BreadcrumbService } from "../service/breadcrumb.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: "app-article-insert",
  templateUrl: "./article-insert.component.html",
  styleUrls: ["./article-insert.component.css"]
})
export class ArticleInsertComponent implements OnInit {
  public option: any;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  public froalaText: string = 'My Document\'s Title';
  validateForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
    private datePipe: DatePipe,
  ) {}
  ngOnInit() {
    this.option = {

      language: 'zh_cn', // 配置语言

      placeholderText: '请输入内容', // 文本框提示内容

      charCounterCount: true, // 是否开启统计字数

      charCounterMax: 4000, // 最大输入数

      codeMirror: false, // 高亮显示html代码

      codeMirrorOptions: {
        // 配置html代码参数
        tabSize: 4
      },
      // imageUploadURL: '/aa/cc',//上传到本地服务器
      // imageUploadParams: {pid: '1'}, //上传图片时带的参数
    };
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      release_time: [null, [Validators.required]],
      cat_id: [null, [Validators.required]]
    });
    this.getCategoryData()
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
  // getFroalaValue(){
  //   console.log(this.froalaText)
  // }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const bodyParams= this.validateForm.value
      bodyParams.release_time = this.datePipe.transform(bodyParams.release_time, 'yyyy-MM-dd')
      bodyParams.content = this.froalaText
      this.http.post('/api/article',bodyParams).pipe(map(res => res))
      .subscribe(
      data => {
        if(data['success'] === true){
          this.message.success('添加成功');
          this.router.navigate(['/layout/article']);
        } else {
          this.message.error('添加失败') ;
        }
      },
      error => {
        console.log("Error", error); 
      })
    }
  }
  ngAfterViewInit() {
    this.breadcrumbService.loadRoutes(this.route.data["value"]);
  }
}
