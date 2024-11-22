 export class Customer{
   [x: string]: any;
    
     id : number;
    firstname: string;
    lastname: string;
    adresse : string;
    phone : string;
    mail: string;

    constructor(id:number, firstname: string, lastname: string,adresse : string, phone : string,mail: string ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
         this.adresse = adresse;
         this.phone = phone;
         this.mail = mail;
    
     }
     
     getFirstname(){
        return this.firstname;
     }
     getPhone(){
        return this.phone;
     }

 } 