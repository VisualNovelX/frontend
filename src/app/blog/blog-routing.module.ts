import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:title', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
