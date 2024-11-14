import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.models';
import { CartService } from 'src/app/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer!: Customer; 
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    console.log(this.customer);
  }
  
  onSaveCustomer(customer: Customer){
    console.log(customer)
    this.customer = customer;
  }
  
}
