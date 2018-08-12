import { NgModule } from '@angular/core';

import { HomeView } from 'views/home/home.view';
import { ProductDetailView } from 'views/product-detail/product-detail.view';
import { ShopView } from 'views/shop/shop.view';

import { ComponentsModule } from 'components/components.module';
import { BlogView } from './blog/blog.view';


@NgModule({
  declarations: [
    HomeView,
    ShopView,
    BlogView,
    ProductDetailView
  ],
  imports: [
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [HomeView]
})
export class ViewsModule { }
