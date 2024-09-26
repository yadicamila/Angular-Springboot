import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnChanges {
  @Input() items: CartItem[]=[]
  total:number=0;
  @Output() removeProductEventEmitter: EventEmitter<number>=new EventEmitter();
  
  onDeleteCart(id:number){
    this.removeProductEventEmitter.emit(id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges=changes['items'];
    this.calculateTotal()
    this.saveSession()
    
  }
  calculateTotal():void{
    this.total=this.items.reduce((accumulator,item)=>accumulator+item.quantity*item.product.price,0);
  }
  saveSession():void{
    // guardar datos en sessionStorage
    sessionStorage.setItem('cart',JSON.stringify(this.items))
  }
}
