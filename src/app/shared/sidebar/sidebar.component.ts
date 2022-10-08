import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
 
})
export class SidebarComponent{

  get historial(){
    return this.gifsServices.historial;
  }

  //Llamado del servicio
  constructor(private gifsServices:GifsService) { }

  //Método para buscar imagenes del sidebar
  buscar(termino:string){
    console.log(termino);
    this.gifsServices.buscarGifs(termino);

  }

  

}