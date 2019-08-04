import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArchiveComponent } from './archive/archive.component';
import { CollectionComponent } from './collection/collection.component';
import { SayComponent } from './say/say.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { SelfCardComponent } from './self-card/self-card.component';
import { FollowAuthorComponent } from './follow-author/follow-author.component';
import { FriendshipLinkComponent } from './friendship-link/friendship-link.component';
import { FooterComponent } from './footer/footer.component';
import { BacktopComponent } from './backtop/backtop.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RecommendComponent } from './recommend/recommend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    HomeComponent,
    ArticleComponent,
    ArchiveComponent,
    CollectionComponent,
    SayComponent,
    NotfoundpageComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CardComponent,
    BannerComponent,
    SelfCardComponent,
    FollowAuthorComponent,
    FriendshipLinkComponent,
    FooterComponent,
    BacktopComponent,
    ArticleDetailComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // tslint:disable-next-line:jsdoc-format
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN},
    { provide: NZ_NOTIFICATION_CONFIG, useValue: {  nzTop : 600 }}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
