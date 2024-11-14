import { Injectable } from '@angular/core';
//import { Trainings } from '../model/trainings.models';
import { Trainings } from '../components/trainings/trainings.component';
import { Customer } from '../model/customer.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  [x: string]: any;

  customer!: Customer;
   items: Trainings[] = [];
  constructor() { }

  addTraining(training: Trainings){
      this.items.push(training);
  }
  getItems(){
    return this.items;
  }
  getCustomer(){
    return this.customer;
  }
  itemsCount(){
    return this.items.length;
  }
  // splice to item with index
  clearCart(index : number){
    this.items.splice(index, 1);
  }
  
}

