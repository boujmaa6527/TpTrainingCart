import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.models';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  session: any;
  customer! : Customer;
  maHashmap: { [key: string]:any} = {};
  form: FormGroup;
  listCustomer: Customer[] | undefined; 
  constructor(public cartService : CartService,private router : Router, public fb: FormBuilder, public storageService: StorageService) { 
    this.form = this.fb.group({
      firstname: [''], 
      lastname: [''],
      adresse: [''],
      phone: [''],
      mail: ['']
    });
  }

  ngOnInit(): void {
   
  //  const localData = localStorage.getItem("session");
  //  if(localData != null){
  //   this.customer = JSON.parse(localData);
   
  //  }
   this.loadFormData();
    
  }
  
  //use addCustomer() of cartservice and redirection to url 'order'
  onSaveCustomer(customer: Customer){
    console.log(customer)
    this.cartService.addCustomer(customer);
    this.router.navigateByUrl('order');
    // localStorage.setItem("session",JSON.stringify(customer));
    // let data:any  = localStorage.getItem("session");
    // alert(data);
    // this.session = JSON.parse(data);
    this.localSt(customer);
    
       
  }

  getCustomer(){
    return this.customer;
  }
  
  localSt(customer: Customer){
   
    localStorage.setItem("firstname", customer.firstname);
    localStorage.setItem("lastname", customer.lastname);
    localStorage.setItem("adresse", customer.adresse);
    localStorage.setItem("phone", customer.phone);
    localStorage.setItem("mail", customer.mail);

   
    localStorage.getItem(customer.firstname);
    localStorage.getItem(customer.lastname);
    localStorage.getItem(customer.adresse);
    localStorage.getItem(customer.phone);
    localStorage.getItem(customer.mail);


  }
  loadFormData(){
    const firstname = this.storageService.getItem("firstname");
    const lastname = this.storageService.getItem("lastname");
    const adresse = this.storageService.getItem("adresse");
    const phone = this.storageService.getItem("phone");
    const mail = this.storageService.getItem("mail");

    if(firstname) {
      this.form?.get("firstname")?.setValue(firstname);
    }
    if(lastname) {
      this.form?.get("lastname")?.setValue(lastname);
    }
    if(adresse) {
      this.form?.get("adresse")?.setValue(adresse);
    }
    if(phone) {
      this.form?.get("phone")?.setValue(phone);
    }
    if(mail) {
      this.form?.get("mail")?.setValue(mail);
    }

  }
  
  
}
export { Customer };

