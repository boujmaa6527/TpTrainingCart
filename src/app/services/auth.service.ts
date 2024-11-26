import { Injectable } from '@angular/core';
import { User } from '../model/user.models';
import * as CryptoJS from 'crypto-js'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private users = [

    {
      id: 1 ,email: "sam@gmail.com", password: '1234', role: ['ADMIN', 'USER']
    },
    {
      id: 2 , email: "hugo@gmail.com", password: '4321', role: ['USER']
    }

  ]
  private currentUser : User | undefined = undefined;

  constructor() {
    const user = localStorage.getItem('currentUser'); 
    if (user) {
      const decrypt = this.DecryptData(user);
      this.currentUser = JSON.parse(decrypt);
      
    }
  }

  login(email:string, password: string): void {

    const userLogin = this.users.find(e => e.email === email);
      console.log(userLogin, "userlogin")
        if(userLogin?.password === password){ 
          const userStorage = JSON.stringify(userLogin); 
          let encrytData = this.encryptData(userStorage);
          localStorage.setItem("currentUser", encrytData);
          this.currentUser = userLogin; 
          console.log(this.currentUser, "currentUser")
              
        }
        

  }
  logOut(): void{

    this.currentUser = undefined;
    localStorage.removeItem("currentUser");

  }
    isLogged(): boolean{

    if(this.currentUser){
        return true;   
    }
    return false;  
    }

    getUser(): User|undefined {

      return this.currentUser;
      
    }
    isAdmin(): boolean{

      return this.currentUser?.role.includes("ADMIN")?  true : false; 

    }
    isUser(): boolean{
      return this.currentUser?.role.includes("USER")? true : false; 
    }
    encryptData(data: string): string{
      return CryptoJS.AES.encrypt(data, environment.secretKey).toString(); 
    }

    DecryptData(data:string) : string{

        return CryptoJS.AES.decrypt(data, environment.secretKey).toString(CryptoJS.enc.Utf8); 

    }

}
