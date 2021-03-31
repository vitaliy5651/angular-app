import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 public sliderItems: Array<{name: string, price: number,image: string}> = [
   {
     name: 'T-shirt',
     price: 5,
     image:'../assets/T-shirt.png'
   },
   {
    name: 'Pants FORCLAZ',
    price: 30,
    image:'../assets/Pants.png'
   },
   {
    name: 'BACKPACK',
    price: 60,
    image:'../assets/back.png'
   },
   {
    name: 'Panto',
    price: 40,
    image:''
   },
   {
    name: 'Desk',
    price: 70,
    image:''
   },
 ]

  constructor() {
  }

}
