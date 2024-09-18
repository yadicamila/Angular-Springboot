import { Component, EventEmitter, Output } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
@Output()  addItemEventEmmiter: EventEmitter<any>= new EventEmitter()

private counterId:number=4;

item:any={
  product:'',
  price: '',
  quantity:''
}
onSubmit(itemForm:NgForm):void{
  if(itemForm.valid){
    this.addItemEventEmmiter.emit({id:this.counterId,...this.item})
    this.counterId ++;
    // para limpiar el formulario
    this.item={
      product:'',
      price: '',
      quantity:''
    }
    itemForm.reset();
    itemForm.resetForm();
  }
}
}
