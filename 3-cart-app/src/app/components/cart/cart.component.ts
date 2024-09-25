import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
@Input() items: CartItem[]=[]
@Input() total:number=0;
@Output() removeProductEventEmitter: EventEmitter<number>=new EventEmitter();
  
onDeleteCart(id:number){
  this.removeProductEventEmitter.emit(id);

}
}
