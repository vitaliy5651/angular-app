import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import {selectCartCount} from '../../selectors/selectors.cart'
import { addToCart, removeFromCart } from '../../actions/actions.cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl(''),
    paymentType: new FormControl('')
  });


  items: any[] = [];

  cartAmount$ = this.store.select(selectCartCount);

  constructor(
    private cart: CartService,
    private store: Store<AppState>
    ) {
    }

  ngOnInit(): void {
    this.items = this.cart.getCartItems();
    this.orderForm.valueChanges.subscribe((v) => {
      console.log(this.orderForm.controls['name'])
    })


    this.store.subscribe((v) => console.log(v));
  }

  onSubmit() {
    let result = Object.assign(
      this.orderForm.value, 
      { items: this.cart.getCartItems() }
    );
    console.log(result);
  }

  addOne(id: number) {
    this.store.dispatch(addToCart());

    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

  removeOne(id: number){
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount--;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

}
