import { Action, createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, addItemToCart, removeItemFromCart } from '../actions/actions.cart';
import { Product } from './../interfaces/product';

export interface State {
    amount: number,
    items: {[key: string]: Product},
}

const cartState: State = {
    amount: 0,
    items: {},
};

const _cartReducer = createReducer(
    cartState,
    on(addToCart, (state: State) => ({...state, amount: state.amount + 1})),
    on(removeFromCart, (state: State) => ({...state, amount: state.amount - 1})),
    on(addItemToCart, (state: State, product) => {
        if (product.id in state.items) {
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: {
                        ...product,
                        amount: state.items[product.id].amount + 1
                    }
                }
            }
        } else {
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: {
                        ...product,
                        amount: 1,
                    }
                }
            }
        }
    }),
    on(removeItemFromCart, (state: State, product) => {
      if (product.id in state.items && state.items[product.id].amount > 1) {
        return {
            ...state,
            items: {
                ...state.items,
                [product.id]: {
                    ...product,
                    amount: state.items[product.id].amount - 1
                }
            }
        }
    } else {
      let copyItems = Object.assign({}, state.items)
      delete copyItems[product.id];
      return {
        ...state,
        items: copyItems,
      }
    }
    })
);

export function cartReducer(state: State = cartState, action: Action) {
    return _cartReducer(state, action);
}


const calculateItemsInCart = (items: any[]): number => {
    let result = items.reduce((total, value) => {
      return value.amount ? total + value.amount : total + 1;
    }, 0);
    return result;
}