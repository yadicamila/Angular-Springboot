import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceData } from '../Data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice:Invoice=InvoiceData;

  constructor() { }

  getInvoice():Invoice {
    const total=this.calculateTotal()
    return {...this.invoice ,total}
  }

  remove(id:number):Invoice{
    this.invoice.items = this.invoice.items.filter(item  => item.id != id);
    const total=this.calculateTotal();
    return  {...this.invoice,total}
    }
  
    add(item:Item):Invoice{
      this.invoice.items = [...this.invoice.items,item]
      const total=this.calculateTotal();
      return  {...this.invoice,total}
    }

    calculateTotal(){
      let total=0;
      this.invoice.items.forEach(item =>{
        total+=(item.quantity*item.price);
      });
      return total;
      //  return this.invoice.items.reduce((total,item)=>total + (item.price * item.quantity));
    }


}
