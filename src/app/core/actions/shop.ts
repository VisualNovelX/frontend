import { Action } from '@ngrx/store';

export enum ShopActionTypes {
  AddProductToCart = '[Shop] Add product to cart',
  RemoveProductToCart = '[Shop] Remove product to cart',
}

export class AddProductToCart implements Action {
  readonly type = ShopActionTypes.AddProductToCart;
  constructor(public payload?: any) { }
}

export class RemoveProductToCart implements Action {
  readonly type = ShopActionTypes.RemoveProductToCart;
  constructor(public payload?: any) { }
}

export type ShopActions = AddProductToCart | RemoveProductToCart;
