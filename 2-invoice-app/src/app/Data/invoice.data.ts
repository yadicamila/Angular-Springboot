import { Invoice } from "../models/invoice";

export const InvoiceData:any={
   id:1,
   name:'componentes de pc',
   client:{
    name:'andres',
    lastname:'Colmenares',
    address:{
        country:'Colombia',
        city:'Cauca',
        street:'one street',
        number:12
    }
   },
   company:{
    name:'new edge',
    fiscalNumber:12345
   },
   items:[
        {
            id:1,
            product:'teclado de pc',
            price:23000,
            quantity:10
        },
        {
            id:2,
            product:'cpu intel 365',
            price:30000,
            quantity:10  
        },
        {
            id:3,
            product:'Monitor Asus',
            price:28000,
            quantity:3
        }
   ]
}