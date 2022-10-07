import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef;

  buscar(termino:string){
   const valor= this.txtBuscar.nativeElement.value;
   console.log(valor);
  }

  

}