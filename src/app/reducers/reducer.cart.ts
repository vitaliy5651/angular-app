import { state } from '@angular/animations';
import {Action, createReducer, on} from '@ngrx/store';
import {addItemToCart, addToCart, removeFromCart} from '../actions/actions.cart';
import { Product } from '../interfaces/product';

export interface State  {
    amount: number,
    items: {},
};

export const cartState: State = {
    amount: 0,
    items: [],
}

const _cartReducer = createReducer(
    cartState,
    on(addToCart, (state: State) => ({...state, amount: state.amount + 1})),
    on(removeFromCart, (state: State) => ({...state, amount: state.amount - 1})),
    on(addItemToCart,(state: State, {product}) => {
       if(product.id in state.items){
        return {
          ...state,
          items: { 
            ...state.items,
            [product.id]: {
              ...product,
              amount: state.items[product.id].amount +1
            }
          }
        }

       }else{

       }
     return{
       ...state,
       items: [...cartState.items, product]
     }
    })
  );

export function cartReducer(state: State = cartState, action: Action) {
    return _cartReducer(state, action);
  }