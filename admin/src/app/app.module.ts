import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';

// tslint:disable-next-line:jsdoc-format
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { ArchiveComponent } from './archive/archive.component';
import { CollectionComponent } from './collection/collection.component';
import { SayComponent } from './say/say.component';
import { ModifypwdComponent } from './modifypwd/modifypwd.component';
import { ArticleInsertComponent } from './article-insert/article-insert.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CollectionInsertComponent } from './collection-insert/collection-insert.component';
import { SayInsertComponent } from './say-insert/say-insert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './service/breadcrumb.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AuthGuard } from './auth/auth.guard';
import { ArticleUpdateComponent } from './article-update/article-update.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    ArticleComponent,
    ArchiveComponent,
    CollectionComponent,
    SayComponent,
    ModifypwdComponent,
    ArticleInsertComponent,
    LoginComponent,
    LayoutComponent,
    CollectionInsertComponent,
    SayInsertComponent,
    BreadcrumbComponent,
    UserinfoComponent,
    ArticleUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // tslint:disable-next-line:jsdoc-format
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [
    BreadcrumbService,
    AuthGuard,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: 600 } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
