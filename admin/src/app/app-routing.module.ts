import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { ArticleInsertComponent } from './article-insert/article-insert.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArchiveComponent } from './archive/archive.component';
import { CollectionComponent } from './collection/collection.component';
import { SayComponent } from './say/say.component';
import { ModifypwdComponent } from './modifypwd/modifypwd.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CollectionInsertComponent } from './collection-insert/collection-insert.component';

import { SayInsertComponent } from './say-insert/say-insert.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'home',
          name: '主页',
        },
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'user',
          name: '用户列表',
        },
      },
      {
        path: 'modifypwd',
        component: ModifypwdComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'modifypwd',
          name: '密码修改',
        },
      },
      {
        path: 'article',
        component: ArticleComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'article',
          name: '文章列表',
        },
      },
      {
        path: 'article-insert',
        component: ArticleInsertComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'article-insert',
          name: '添加文章',
        },
      },
      {
        path: 'article-update',
        component: ArticleUpdateComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'article-update',
          name: '编辑文章',
        },
      },
      {
        path: 'archive',
        component: ArchiveComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'archive',
          name: '归档列表',
        },
      },
      {
        path: 'collection',
        component: CollectionComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'collection',
          name: '收藏列表',
        },
      },
      {
        path: 'collection-insert',
        component: CollectionInsertComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'collection-insert',
          name: '添加收藏',
        },
      },
      {
        path: 'say',
        component: SayComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'say',
          name: '说说列表',
        },
      },
      {
        path: 'say-insert',
        component: SayInsertComponent,
        canActivate: [AuthGuard],
        data: {
          url: 'say-insert',
          name: '添加说说',
        },
      },
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
