import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsServices:GifsService){}


  buscar(){

    const valor = this.txtBuscar.nativeElement.value;
    this.gifsServices.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
    console.log(valor);

  }

  

}