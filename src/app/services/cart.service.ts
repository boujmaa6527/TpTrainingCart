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
  addCustomer(customer: Customer){
    console.log(customer);
   this.listCustomer.push(customer)
    

  }
  getItems(){
    return this.items;
  }
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

