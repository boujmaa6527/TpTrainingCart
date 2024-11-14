import { Component, Inject, OnInit } from '@angular/core';
import { Trainings } from 'src/app/model/trainings.models';
import {CartService} from  'src/app/services/cart.service';
import { Router} from  '@angular/router';




@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  carteService = Inject(CartService);
  training!: Trainings;  
  listTrainings : Trainings[] | undefined; 
  items: any;
  constructor(public cartService :  CartService, private router : Router) {this.cartService = cartService; this.router = router }
  
  ngOnInit(): void {
    this.listTrainings = [
      {id:1, name : "Java", description:"Formation java SE", price:1500, quantity:1},
      {id:2, name : "DotNet", description:"Formation DotNet 3 jours", price:1000, quantity:1},
      {id:3, name : "Python", description:"Formation Python/Django 5 jours", price:1500, quantity:1},
    ];
  }
  onAddToCart(training:Trainings){
    this.cartService.addTraining(training);
    this.router.navigateByUrl('cart');
    
  }
  addTraining(training : any){
    console.log(training);
    this.training = training;
    this.cartService.addTraining(training);
    window.alert("your product has been added to the cart! ");
  }
  clearCart(training : Trainings){
   
    this.items.clearCart(training);
    console.log(training);
  }
    displayTrainings(){
      this.listTrainings = [
        {id:1, name : "Java", description:"Formation java SE", price:1500, quantity:1},
        {id:2, name : "DotNet", description:"Formation DotNet 3 jours", price:1000, quantity:1},
        {id:3, name : "Python", description:"Formation Python/Django 5 jours", price:1500, quantity:1},
      ];
    }
}
export { Trainings };

