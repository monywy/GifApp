import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private _historial : string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string){

    this._historial.unshift(query);
    //Validacion elementos repetidos
    if( !this._historial.indexOf( query ) ) {
      this._historial.unshift( query );
    }
    ///Limitar el numero de registros en el historial
    this._historial=this._historial.splice(0,10); 
    console.log(this._historial);

  }
  
}