import { ShopActions, ShopActionTypes } from '../actions/shop';

export interface State {
  cart: Product[];
  products: Product[];
}

const initialState: State = {
  cart: [],
  products: [
    {
      id: '1',
      image: 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_md_t$',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 12.2,
      discount: 0,
      sizes: ['SM', 'MD','XL'],
      colors: ['Blue', 'Red', 'Yellow'],
      quantity: 20
    },
    {
      id: '2',
      image: 'https://img.game.co.uk/ml2/7/0/4/3/704348_scr2_a.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 23.2,
      discount: 0,
      sizes: ['SM', 'MD','XL'],
      colors: ['Blue', 'Red', 'Yellow'],
      quantity: 20
    },
    {
      id: '3',
      image: 'https://s.pacn.ws/640/s6/nintendo-switch-neon-redblue-507135.5.jpg?ojur3e',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 123.2,
      discount: 0,
      sizes: ['SM', 'MD','XL'],
      colors: ['Blue', 'Red', 'Yellow'],
      quantity: 20
    },
    {
      id: '4',
      image: 'https://cdn.vox-cdn.com/thumbor/CTBUA5v_1uBybXENKpsxGcpRsA8=/0x0:3840x2558/1820x1213/filters:focal(933x673:1547x1287):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56944155/psvr_rev2.0.jpg',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 122.2,
      discount: 0,
      sizes: ['SM', 'MD','XL'],
      colors: ['Blue', 'Red', 'Yellow'],
      quantity: 20
    },
  ]
};

export function reducer(
  state: State = initialState,
  action: ShopActions
): State {
  switch (action.type) {
    case ShopActionTypes.AddProductToCart:
        const { data } = action.payload;  
        return {
            ...state,
            cart: [...state.cart, data]
        };
    case ShopActionTypes.RemoveProductToCart:
        const { data : id } = action.payload
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== id ),
        }
    default:
        return state;
  }
}

