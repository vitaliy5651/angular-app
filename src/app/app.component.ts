import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 public slideritems: Array<{name: string, price: number}> = [
   {
     name: 'T-shirt',
     price: 30,
   },
   {
    name: 'Test',
    price: 50,
   },
   {
    name: 'Hat',
    price: 20,
   },
   {
    name: 'Panto',
    price: 40,
   },
   {
    name: 'Desk',
    price: 70,
   },
 ]

  constructor() {
  }
 

  ngOnInit() {

  }

}
