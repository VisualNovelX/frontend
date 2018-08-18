import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisModule } from 'ngx-ellipsis';

import { PostService } from './services';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogView, PostView } from './views';
import {
  BlogHeaderComponent, PostPreviewComponent, PostImageComponent, 
  PostCategoriesComponent, PostTitleComponent, PostShareComponent, 
  PostInfoComponent, PostShortComponent, ReadMoreComponent 
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
    PostImageComponent,
    PostCategoriesComponent,
    PostTitleComponent,
    PostShareComponent,
    PostInfoComponent,
    PostShortComponent,
    ReadMoreComponent,
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
