//Servicio con petición http

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; //importación del servicio http cliente para peticiones
import { SearchGifsResponse,Gif } from '../interface/gifs.interfaces';


@Injectable({
  //para que mi servicio pueda ser usado en toda la aplicacion
  providedIn: 'root'
})

export class GifsService {

  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  //Tipado de datos deacuerdo a SearchGifsResponse
  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    //Se cargan los datos del LocalStorage, ya que solo se ejecuta una vez.

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  
    //segundo método para traer información del LocalStorage
    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
   //  }

  }



  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();
    
    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      //grabando historial----JSON.stringify---->convierte cualquier objeto en un string----el LocalStorage solo guarda strings
      //localStorage.setItem('historial 2',query);
      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        //Grabando los resultados en el LocalStorage
        localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
      });

  }


}