import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public dataSource: Observable<any>;
  public articleList: Observable<any>;
  public categorySource: Observable<any>;
  public paginationSizeOptions = [5, 10, 20, 30, 50];
  public currentPage: Number = 1;
  public pageSize: Number = 5;
  public total: Number = 1;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    // 获取文章列表
    this.getArticleData(this.currentPage, this.pageSize);
  }
  getArticleData(page, size) {
    const params = new HttpParams()
      .set("page", page)
      .set("size", size)
      .set("content", "0")
      .set("cat_id", "");
    this.dataSource = this.http
      .get("/api/article", { params })
      .pipe(map(res => res));
    this.dataSource.subscribe(data => {
      try {
        this.articleList = data.data;
        this.currentPage = data.page;
        this.pageSize = data.size;
        this.total = data.totalPage;
        window.localStorage.setItem("article_num", data.num);
      } catch (err) {
        console.log(err);
      }
    });
  }
  handelGoDetail(id) {
    this.router.navigate(["article-detail"], {
      queryParams: {
        articleId: id,
        name: "文章详情",
        link: "article-detail"
      }
    });
  }
  getArticleDataBySearch(searchQuery) {
    this.currentPage = 1;
    this.pageSize = 5;
    this.getArticleData(this.currentPage, this.pageSize);
  }
  changePageIndex(pageIndex) {
    this.currentPage = pageIndex;
    this.getArticleData(this.currentPage, this.pageSize);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getArticleData(this.currentPage, this.pageSize);
  }
}
