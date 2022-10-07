import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private _historial : string[] = [];

  get historial() {
    return [...this._historial];
  }
  constructor(private http:HttpClient){}

  buscarGifs(query: string){

    query=query.trim().toLocaleLowerCase();

    //Validacion elementos repetidos
    
    if( !this._historial.includes(query) ) {
      this._historial.unshift( query );
       ///Limitar el numero de registros en el historial
      this._historial=this._historial.splice(0,10); 
    }
    //Peticion get utilizando HttpClient
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5&q=wisinyyandel&limit=10')
    //Respuesta de la petición
    .subscribe (resp =>{
      console.log(resp);
    });
    

  }
  
}