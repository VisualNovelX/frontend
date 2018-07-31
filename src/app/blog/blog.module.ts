import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisModule } from 'ngx-ellipsis';

import { BlogComponent } from './blog.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogRoutingModule } from "./blog-routing.module";
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostShareComponent } from './post-share/post-share.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    EllipsisModule
  ],
  declarations: [
    BlogComponent,
    BlogHeaderComponent,
    PostPreviewComponent,
    PostShareComponent,
    SidebarComponent,
    PostComponent
  ],
  exports: [
    BlogComponent,
    PostPreviewComponent,
    BlogRoutingModule
  ]
})
export class BlogModule { }
