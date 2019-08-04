import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArchiveComponent } from './archive/archive.component';
import { CollectionComponent } from './collection/collection.component';
import { SayComponent } from './say/say.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article-detail', component: ArticleDetailComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'say', component: SayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
