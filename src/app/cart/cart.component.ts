import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    products: [],
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process checkout data here
    console.info('Your order has been submitted', this.checkoutForm.value);
    console.info('Here is what you purchased', this.items.values);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}