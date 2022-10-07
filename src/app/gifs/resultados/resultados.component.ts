import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  
})
export class ResultadosComponent {

  get resultados(){
    return this.gifServices.resultados;
  }

  constructor(private gifServices:GifsService) { }

 
}