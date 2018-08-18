import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopService } from './services';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopView, ProductDetailView, CartView } from './views';
import { ProductCardComponent } from './components';



@NgModule({
  imports: [
  CommonModule,
    ShopRoutingModule,
  ],
  declarations: [
    ShopView,
    ProductDetailView,
    CartView,
    ProductCardComponent,
  ],
  providers: [
    ShopService
  ]
})
export class ShopModule { }
