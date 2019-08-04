import { Injectable } from '@angular/core';
import storage from '../common/storage';
import { Router } from '@angular/router';
/**
 **@desc  这个服务将会注入到路由守卫中 该文件返回一个状态 用来判断用户是否登陆
 */

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatus: any = false;
  constructor(private router: Router) {
    if (storage.session.get('userId')) {
      this.loginStatus = true;
    } else {
      // this.router.navigate(['/login'])
      this.loginStatus = false;
    }
  }
}
