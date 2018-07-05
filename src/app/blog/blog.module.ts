import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisModule } from 'ngx-ellipsis';

import { BlogComponent } from './blog.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogRoutingModule } from "./blog-routing.module";
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostImageComponent } from './post-image/post-image.component';
import { PostCategoriesComponent } from './post-categories/post-categories.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostShareComponent } from './post-share/post-share.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostShortComponent } from './post-short/post-short.component';
import { ReadMoreComponent } from './read-more/read-more.component';
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
    PostImageComponent,
    PostCategoriesComponent,
    PostTitleComponent,
    PostShareComponent,
    PostInfoComponent,
    PostShortComponent,
    ReadMoreComponent,
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
