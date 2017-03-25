import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { PageSingleComponent } from './page/page-single/page-single.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  }
  
  ,
  {
    path: ':slug',
     component: PageSingleComponent
   // component: PostSingleComponent
  }
  ,
  {
    path: ':pageSlug',
    component: PageSingleComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
