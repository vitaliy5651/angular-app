import { Component, OnInit } from '@angular/core';
import {  DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 

  constructor() {
    function myFunction() {
      // Get the checkbox
      var checkBox = document.getElementById("myCheck");
    }
  }
 

  ngOnInit() {

  }

}
