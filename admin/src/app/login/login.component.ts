import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userNameAsyncValidator, passWordAsyncValidator } from '../common/validator';
import storage from '../common/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  result: Observable<any>;
  public success: any;
  public error: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private message: NzMessageService
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(5)], [userNameAsyncValidator]],
      password: [null, [Validators.required, Validators.minLength(8)], [passWordAsyncValidator]],
    });
    storage.session.clear();
  }
  /*
    提交时+pending
    成功回调pending结束
  */
  submitForm() {
    // 提交完成后清空
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const bodyParams = this.validateForm.value;
      this.result = this.http.post('/api/login', bodyParams).pipe(map(res => res));
      this.result.subscribe(data => {
        if (data.code === 1) {
          storage.session.set('username', data.userInfo.userName);
          storage.session.set('password', data.userInfo.password);
          storage.session.set('userId', data.userInfo.userId);
          this.message.success(data.message, { nzDuration: 1500 });
          this.router.navigate(['/layout']);
        } else {
          this.message.error(data.message, { nzDuration: 1500 });
        }
      });
    }
  }
}
