import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.css']
})
export class BacktopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
  }
  handelBackTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
