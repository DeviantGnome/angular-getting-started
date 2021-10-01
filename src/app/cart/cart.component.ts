import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = new FormGroup({
    products: new FormControl(this.items),
    name: new FormControl(''),
    address: new FormControl('')
  });
  
  // products = new FormControl([]);

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process checkout data here
    console.info('Your order has been submitted', this.checkoutForm.value);
    // console.info('Here is what you purchased', this.items.values);
    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}