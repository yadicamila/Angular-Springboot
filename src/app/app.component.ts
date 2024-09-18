import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title: string = 'Hola mundo desde componente';
  subtitle:string="contador con estado de sesion"
  users: string[]=['camila','Nicol', 'Karen','Mauricio','Petro']
  // users: string[]=[];
  visible: boolean=false;
  counter:number=0;
  
  ngOnInit(): void {
    this.counter=parseInt(localStorage.getItem('counter')!) || 0;
  }
  // metodo
  setVisible():void {
    this.visible=this.visible? false: true;
  }
  setCounter(event:number):void{
    this.counter=event;
  }
}
