import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.models';
import { StorageService } from 'src/app/services/storage.service';

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
  constructor(private router : Router, public carteSerice: CartService, public storageService: StorageService) {
    let user = this.carteSerice.getUser();
    this.userForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
   
   }
   onSubmit(){
    console.log(this.userForm.value);
    this.localSt(this.userForm)
    alert("Vous etes connectés !")
    this.router.navigateByUrl('order');
    
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
    this.loadFormData();
   
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
