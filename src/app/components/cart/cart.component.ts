import { Component,Inject,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Trainings } from '../trainings/trainings.component';
import { Customer } from 'src/app/model/customer.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit{

 
  items = this.cartService.getItems();
  constructor(private cartService : CartService, private router : Router){}

  ngOnInit(): void {
    
    
  }
  
  //delete this item on index
  clearCart(index : number){
    this.cartService.clearCart(index);
    console.log(index);
    
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
