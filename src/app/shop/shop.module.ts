import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopView } from './views/shop/shop.view';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShopService } from './services/shop.service';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { CartView } from './views/cart/cart.view';


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
