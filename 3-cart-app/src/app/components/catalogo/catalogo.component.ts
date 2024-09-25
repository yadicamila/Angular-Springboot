import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',

})
export class CatalogoComponent {
  @Input() products!:Product[]
  @Output() addEventEmitter: EventEmitter<Product>=new EventEmitter();
  
onAddCart(product:Product){
  this.addEventEmitter.emit(product);
}
}
