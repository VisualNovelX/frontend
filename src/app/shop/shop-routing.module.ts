import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopView } from './views/shop/shop.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';

const routes: Routes = [
  { path: 'shop', component: ShopView },
  { path: 'shop/:id', component: ProductDetailView },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
