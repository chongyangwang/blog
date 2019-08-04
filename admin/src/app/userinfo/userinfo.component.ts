import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import storage from '../common/storage';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
  public avoTorSrc: string = '../../assets/images/avtor.jpg';
  constructor(private router: Router) {}

  ngOnInit() {}
  handelLogOut() {
    this.router.navigate(['/login']);
    // 跳转至登陆页 并清空storage
  }
}
