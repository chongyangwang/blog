import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  public articleId: string;
  public article: Observable<any>;
  public dataSource: Observable<any>;
  constructor( private activatedRoute: ActivatedRoute, private http: HttpClient, ) { 
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.articleId = queryParams.articleId;
    });
  }
  ngOnInit() {
    this.getArticleDetail(this.articleId)
  }
  getArticleDetail(id){
    const params = new HttpParams()
    .set('article_id', id);
    this.dataSource = this.http.get('/api/detail-article',{ params }).pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try{
        this.article = data.data[0]
      } catch(err){
        console.log(err)
      }
    });
  }
}
