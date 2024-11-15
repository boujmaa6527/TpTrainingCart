import { Injectable } from '@angular/core';
//import { Trainings } from '../model/trainings.models';
import { Trainings } from '../components/trainings/trainings.component';
//import { Customer } from '../model/customer.models';
import { Customer } from '../components/customer/customer.component';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  listCustomer: Customer[] = [];
   items: Trainings[] = [];
  constructor() { }

  addTraining(training: Trainings){
      this.items.push(training);
  }

  onSaveCustomer(customer: Customer){
    console.log(customer)
    
  }
  // add to customer to send in order page
  addCustomer(customer: Customer){
    console.log(customer);
   this.listCustomer.push(customer)
    

  }
  //return list of item(trainigs)
  getItems(){
    return this.items;
  }
  //return list of customer
  getCustomer(){
    return this.listCustomer;
  }
  itemsCount(){
    return this.items.length;
  }
  // splice to item with index
  clearCart(index : number){
    this.items.splice(index, 1);
  }
  
}

