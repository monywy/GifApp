import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;



  buscar(){

    
    const valor = this.txtBuscar.nativeElement.value;

    //if ( valor.trim().length === 0 ) {
     // return;
    //}

   // this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
    console.log(valor);

  }

  

}