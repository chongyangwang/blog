import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
/*
  **@desc: 此文件用来做自定义的表单验证规则
  **@created By: chongyang
*/

/*
  @desc: 自定义校验用户名的方法
*/
export function userNameAsyncValidator(control: FormControl) {
  const reg = /[a-z]{5}/;
  return Observable.create((observer: Observer<ValidationErrors | null>) => {
    if (reg.test(control.value)) {
      observer.next(null);
    } else {
      observer.next({formatname: true});
    }
    observer.complete();
  });
}
/*
  @desc: 自定义校验密码的方法
*/
export function passWordAsyncValidator(control: FormControl) {
  const reg = /^[a-z0-9]{8}/;
  return Observable.create((observer: Observer<ValidationErrors | null>) => {
    if (reg.test(control.value)) {
      observer.next(null);
    } else {
      observer.next({formatpwd: true});
    }
    observer.complete();
  });
}
