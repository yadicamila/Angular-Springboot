import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
// Oninit es para inicializar informacion
export class CounterComponent implements OnInit {
  @Input() title!:string;
  
  @Output() counterEmmit:EventEmitter<number>= new EventEmitter();
  counter : number=0;
  ngOnInit(): void {
    this.counter=parseInt(localStorage.getItem('counter')!) || 0;
    console.log("primera ves")
  }
  setCounter():void{
    this.counter++;
    localStorage.setItem('counter',this.counter.toString())
    this.counterEmmit.emit(this.counter)
    console.log(this.counter)

  }
}
