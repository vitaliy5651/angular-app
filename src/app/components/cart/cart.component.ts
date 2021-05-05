import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderForm = new FormGroup({
    name : new FormControl ('', [Validators.required]),
    address : new FormControl (''),
    paymentType : new FormControl ('')
  })
  
  items: any[] = [];
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.items =this.groupItem(this.cart.getCartItems());
  }
  onSubmit(){
    let result = Object.assign(
      this.orderForm.value,
      {items: this.cart.getCartItems()}
    );
    console.log(result);
  }

  groupItem(arr: any[]): any[]{
        const result: any[] = [];
        const ids: any[] = [];
       for(let item of arr){
         if(!item.amount){
          if(ids.includes(item.id)){
            result.forEach((el, i)=>{
              if(el.id === item.id){
                result[i].amount++;
              }
            })
          }else{
            result.push({...item, amount: 1 });
            ids.push(item.id);
          }
         }else{
           result.push();
         }
         }
         return result;
 }

 addOne(id: number){
   this.items = this.items.map((el)=>{
     if(el.id === id){
       el.amount++;
     }
     return el;
   });
   this.cart.setItemsInCart(this.items);
 }

  removeOne(id: number){
    this.items = this.items.map((el)=>{
      if(el.id === id){
        el.amount--;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }
}
