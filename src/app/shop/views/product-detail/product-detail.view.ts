import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../core/store';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product-detail-view',
  templateUrl: './product-detail.view.html',
  styleUrls: ['./product-detail.view.css']
})
export class ProductDetailView {
  
  product: Product;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.select(state => state.shop.products ).subscribe(products => {
      this.product = products.find(product => product.id === id);
    });
  }
}
