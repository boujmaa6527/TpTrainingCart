import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.models';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   
  phone! : number;
  mail!: string;
  customer! : Customer;
  listCustomer: Customer[] | undefined; 
  constructor(public cartService : CartService,private router : Router) { }

  ngOnInit(): void {
    
  }
  
  onSaveCustomer(customer: Customer){
    console.log(customer)
    this.cartService.addCustomer(customer);
    this.router.navigateByUrl('order');
  }
  getCustomer(){
    return this.customer;
  }
  
  
  
}
export { Customer };

