import { Component,Inject,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Customer } from 'src/app/model/customer.models';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit{

  message ="";
  items = this.cartService.getItems();
  customer!: Customer;
  constructor(private cartService : CartService, private router : Router, public storageService: StorageService, public authService : AuthService){}

  ngOnInit(): void {
    console.log(this.items);
   
  }
  
  //delete this item on index
  clearCart(index : number){
    this.cartService.clearCart(index);
    console.log(index);
    
  }
  isCommandLogged():void{
    if(this.authService.isLogged()){
      this.router.navigateByUrl("order")
       
    }else{
        this.message = "Veuillez-vous connecter "
    }
   
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
