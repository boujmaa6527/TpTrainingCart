import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Trainings } from '../trainings/trainings.component';
import { Customer } from '../customer/customer.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dateOrder : Date = new Date();
  showModal = false;
  modalTitle=  "Commande confirmée";
  modalContent = "Votre commande a bien été pris en compte."

  customer!: Customer;
  training!: Trainings;
  listUser = this.cartService.getUser();
  listCustomer = this.cartService.getCustomer();
  items = this.cartService.getItems();
  constructor(private cartService : CartService, private router : Router, private storageService : StorageService) { }

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
  localSt(items: Trainings){
   
    localStorage.setItem("name", items.name);
    localStorage.setItem("quantity", items.quantity.toString());
    localStorage.setItem("price", items.price.toString());
   
    localStorage.getItem(this.customer.firstname);
    localStorage.getItem(this.customer.lastname);
    localStorage.getItem(this.customer.adresse);
    localStorage.getItem(this.customer.phone);
    localStorage.getItem(this.customer.mail);

   
   

  }
  loadData(item: Trainings){
    const name = this.storageService.getItem("name");
    const quantity = this.storageService.getItem("quantity");
    const price = this.storageService.getItem("price");
    
    localStorage.getItem(item.name);
    localStorage.getItem(item.quantity.toString());
    localStorage.getItem(item.price.toString());
  
 }
  

}
