import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  
})
export class TotalComponent {
@Input() total!:number;
}
