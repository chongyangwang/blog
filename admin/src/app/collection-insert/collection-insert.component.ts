import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-collection-insert',
  templateUrl: './collection-insert.component.html',
  styleUrls: ['./collection-insert.component.css']
})
export class CollectionInsertComponent implements OnInit {
  validateForm: FormGroup;
  public categoryList: Observable<any>;
  public categorySource: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
    private breadcrumbService: BreadcrumbService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      url: [null, [Validators.required]],
      entry_time: [null, [Validators.required]],
      cat_id: [null, [Validators.required]]
    });
    // 获取分类列表
    this.getCategoryData();
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
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const bodyParams= this.validateForm.value
      bodyParams.entry_time = this.datePipe.transform(bodyParams.entry_time, 'yyyy-MM-dd')
      this.http.post('/api/collection',bodyParams).pipe(map(res => res))
      .subscribe(
      data => {
        if(data['success'] === true){
          this.message.success('添加成功');
          this.router.navigate(['/layout/collection']);
        } else {
          this.message.error('添加失败') ;
        }
      },
      error => {
        console.log("Error", error); 
      })
    }
  }
  ngAfterViewInit(){
    this.breadcrumbService.loadRoutes(this.route.data['value'])
  }
}
