import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { Item } from '../../models/item';
import { FormItemComponent } from '../form-item/form-item.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    ClientViewComponent,
    CompanyViewComponent,
    InvoiceViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html',

})
export class InvoiceComponent implements  OnInit {
  invoice!:Invoice;
  total!:number;

  constructor(private service: InvoiceService){

  }
  ngOnInit()  {
    this.invoice=this.service.getInvoice();
  }

  // con filter buscamos y eliminamos un item
  removeItem(id:number){
    this.invoice=this.service.remove(id)
  }
  addItem(item:Item){
    this.invoice=this.service.add(item)
  }
}
