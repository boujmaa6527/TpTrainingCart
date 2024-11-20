import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Trainings } from '../trainings/trainings.component';
import { Customer } from '../customer/customer.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
[x: string]: any;

  customer!: Customer;
  listCustomer = this.cartService.getCustomer();
  items = this.cartService.getItems();
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    
    
  }

  get totalPrice(){
    let totalPrice = 0;
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].price){
        totalPrice += this.items[i].price * this.items[i].quantity;

      }
    }
    return totalPrice;
  }
  

}
