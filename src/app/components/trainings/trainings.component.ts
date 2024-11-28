import { Component, Inject, OnInit } from '@angular/core';
import { Trainings } from 'src/app/model/trainings.models';
import {CartService} from  'src/app/services/cart.service';
import { Router} from  '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  carteService = Inject(CartService);
  training!: Trainings;  
  
  listTrainings : Trainings[]  = []; 
  items: any;
  error: any;
  
  constructor(public cartService :  CartService, private router : Router, public apiService: ApiService, public authService : AuthService) { }
  
  ngOnInit(): void {
    this.getAllTrainings();
    
  }
  onAddToCart(training:Trainings){ 
   
      this.cartService.addTraining(training);
      this.router.navigateByUrl('cart');
    
    
  }
  addTraining(training : any){
    console.log(training);
    this.training = training;
    if(training.quantity > 0){
        this.cartService.addTraining(training);
        window.alert("your product has been added to the cart! ");
    }else{
      window.alert("La Quantité doit etre supérieur à 0");
    }
    
  }
  clearCart(training : Trainings){
   
    this.items.clearCart(training);
    console.log(training);
  }
    // displayTrainings(){
    //   // this.listTrainings = [
    //   //   {id:1, name : "Java", description:"Formation java SE", price:1500, quantity:1},
    //   //   {id:2, name : "DotNet", description:"Formation DotNet 3 jours", price:1000, quantity:1},
    //   //   {id:3, name : "Python", description:"Formation Python/Django 5 jours", price:1500, quantity:1},
    //   // ];
    // }
  getAllTrainings() {
    this.apiService.getTrainings().subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error =  null,
    }); 
  }
  deleteTraining(id: number){
     let del = confirm("Etes-vous sur de vouloir supprimer ?"); 
      if(del){
        this.apiService.deleteTraining(id).subscribe(re =>{
          this.getAllTrainings();
        })
        this.router.navigateByUrl('trainings');
      }
    
      
  }
}
export { Trainings };

