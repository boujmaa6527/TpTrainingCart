export class Training{

        id : number;
        nameTraining: string;
        description: string;
        price: number;
        quantity:number;

        constructor(id: number, name:string, description:string, price: number, quantity:number){
            this.id = id;
            this.nameTraining = name;
            this.description = description;
            this.price = price;
            this.quantity = quantity;

        }


}