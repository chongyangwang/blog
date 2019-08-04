import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-author',
  templateUrl: './follow-author.component.html',
  styleUrls: ['./follow-author.component.css']
})
export class FollowAuthorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  handelClick(){
    window.open('https://github.com/chongyangwang')
  }
}
