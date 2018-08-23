import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogView, PostView } from './views';

const routes: Routes = [
  { path: 'blog', component: BlogView },
  { path: 'blog/:title', component: PostView }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
