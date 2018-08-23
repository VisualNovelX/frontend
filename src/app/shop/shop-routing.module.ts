import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopView, ProductDetailView, CartView } from './views';


const routes: Routes = [
  { path: 'shop', component: ShopView },
  { path: 'shop/:id', component: ProductDetailView },
  { path: 'cart', component: CartView },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
