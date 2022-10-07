import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
 
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.gifsServices.historial;
  }

  constructor(private gifsServices:GifsService) { }

  ngOnInit() {
  }

}