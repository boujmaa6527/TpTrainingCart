import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.models';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;
  password!:User;
  userForm!: FormGroup ; 
  name!: FormControl;
  constructor(private router : Router, public carteSerice: CartService, public storageService: StorageService, public authService: AuthService) {
    let user = this.authService.getUser();
    this.userForm = new FormGroup({
      email: new FormControl(user?.email),
      password: new FormControl(user?.password)
    });
   
   }
   onSubmit(){
    console.log(this.userForm.value, "onSubmit");
    //this.localSt(this.userForm)
   
    if(this.userForm.valid){
      this.authService.login(this.userForm.value.email, this.userForm.value.password);
      if(this.authService.isLogged()){
        console.log(this.authService.login);
        alert("Vous etes connectés !")
        this.router.navigateByUrl('cart');
      }

    }
   
   
   
    
   }
   onSaveUser(user: User){
    console.log(user)
    this.carteSerice.addUser(user);
    this.router.navigateByUrl('order');
   }
  getUser(){
    return this.user; 
  }

  ngOnInit(): void {
    console.log(this.userForm);
    //this.loadFormData();
    if(this.authService.isLogged()){
      this.router.navigateByUrl('order');
    }
   
  }
  localSt(userForm: FormGroup){
    localStorage.setItem("email", userForm.value.email);
    localStorage.setItem("password", userForm.value.password);
  }
  loadFormData(){
    const email = this.storageService.getItem("email");
    const password = this.storageService.getItem("password");
   
    if(email) {
      this.userForm?.get("email")?.setValue(email);
    }
    if(password) {
      this.userForm?.get("password")?.setValue(password);
    }

  }


}
