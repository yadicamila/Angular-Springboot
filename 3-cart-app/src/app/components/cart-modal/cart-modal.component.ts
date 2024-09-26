import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',

})
export class CartModalComponent {
@Input() items!:CartItem[]
// @Input() total!:number
@Output() removeProductEventEmitter: EventEmitter<number>=new EventEmitter();
  

OnDeleteCart(id:number){
  this.removeProductEventEmitter.emit(id);

}
@Output() closeEventEmitter:EventEmitter<''>=new EventEmitter()

closeCart():void{
 this.closeEventEmitter.emit()
}
}
