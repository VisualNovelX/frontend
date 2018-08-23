import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../core/store';

@Component({
  selector: 'shop-view',
  templateUrl: './shop.view.html',
  styleUrls: ['./shop.view.css']
})
export class ShopView {

  products$: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products$ = this.store.select(state => state.shop.products );
  }

}
