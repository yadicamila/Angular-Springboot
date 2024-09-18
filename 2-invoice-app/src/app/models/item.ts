export class Item{
    id!:number;
    product!:string;
    price!:number;
    quantity!:number;

    // este es un metodo de esta clase
    total():number{
        return this.price*this.quantity
    }
}
