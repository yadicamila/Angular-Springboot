import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CartItem } from '../models/cartItem';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent,CartComponent,NavbarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  // estos son los productos
  products!:Product[];

  // estos son los items del carro de compras
  items:CartItem[]=[]

  total!:number;
  showCart:boolean=false;
  constructor(private service:ProductService){

  }
  ngOnInit(): void {
    this.products=this.service.findAll()
    this.items=JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }
  onAddCart(product:Product){
    // para validar si el elememnto ya existe en el carrito de compras
    const hasItem=this.items.find(item=>{ return item.product.id===product.id;
    })
    if(hasItem){
      this.items=this.items.map(item=>{
        if(item.product.id==product.id){
          return {...item,quantity:item.quantity+1}
        }
        return item;
      })
    }else{

      this.items=[...this.items,{product:{...product},quantity:1}]
    }
    this.calculateTotal();
    this.saveSession();

  } 

  OnDeleteCart(id:number):void{
    this.items=this.items.filter(item  => item.product.id != id);
    this.calculateTotal()
    this.saveSession();
  
  }
  calculateTotal():void{
    this.total=this.items.reduce((accumulator,item)=>accumulator+item.quantity*item.product.price,0);
  }
  saveSession():void{
    // guardar datos en sessionStorage
      sessionStorage.setItem('cart',JSON.stringify(this.items))
  }
  openCart():void{
    this.showCart=!this.showCart
  }
}
