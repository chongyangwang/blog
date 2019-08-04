import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  path: import('@angular/router').ActivatedRouteSnapshot[];
  route: import('@angular/router').ActivatedRouteSnapshot;
  constructor(private loginAuth: LoginService) {}
  // 若用户登陆成功 则路由跳转  否则路由不跳转
  canActivate(): boolean {
    if (this.loginAuth.loginStatus) {
      return true;
    } else {
      return false;
    }
  }
}
