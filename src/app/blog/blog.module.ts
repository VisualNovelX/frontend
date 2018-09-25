import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisModule } from 'ngx-ellipsis';

import { PostService } from './services';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogView, PostView } from './views';
import {
  BlogHeaderComponent, PostPreviewComponent, PostShareComponent, PostTimeComponent, SidebarComponent
} from './components';


@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    EllipsisModule
  ],
  declarations: [
    BlogView,
    PostView,
    BlogHeaderComponent,
    PostPreviewComponent,
    PostShareComponent,
    PostTimeComponent,
    SidebarComponent
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
