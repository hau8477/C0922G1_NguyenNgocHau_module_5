import { Component } from '@angular/core';
import {Product} from "./common/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product : Product = {
    name: 'Hat',
    quantity: 200,
    price: 500
  }
}
