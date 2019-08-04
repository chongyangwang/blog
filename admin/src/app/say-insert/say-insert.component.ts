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
  selector: 'app-say-insert',
  templateUrl: './say-insert.component.html',
  styleUrls: ['./say-insert.component.css'],
})
export class SayInsertComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
    private breadcrumbService: BreadcrumbService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      img_url: [''],
      release_time: [new Date(), [Validators.required]],
      content: [null, [Validators.required]],
    });
  }
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }
  onOk(result: Date): void {
    console.log('onOk', result);
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const bodyParams = this.validateForm.value;
      bodyParams.release_time = this.datePipe.transform(bodyParams.release_time, 'yyyy-MM-dd HH:mm:ss');
      this.http
        .post('/api/say', bodyParams)
        .pipe(map(res => res))
        .subscribe(
          data => {
            if (data['success'] === true) {
              this.message.success('添加成功');
              this.router.navigate(['/layout/say']);
            } else {
              this.message.error('添加失败');
            }
          },
          error => {
            console.log('Error', error);
          }
        );
    }
  }
  ngAfterViewInit() {
    this.breadcrumbService.loadRoutes(this.route.data['value']);
  }
}
