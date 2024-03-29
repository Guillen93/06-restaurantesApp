import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Restaurante} from '../interfaces/restaurantes.interfaces'
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
private baseUrl: string = environment.baseUrl;

  getRestaurantes(): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.baseUrl+'/restaurantes');
  } 
  getRestaurantesPorId(id:string): Observable<Restaurante>{
    return this.http.get<Restaurante>(this.baseUrl+'/restaurantes/'+id);
  }
  getSugerencias(termino: string): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.baseUrl+'/restaurantes?q='+termino+'&_limit=6');
  }
  agregarRestaurante(restaurante: Restaurante):Observable<Restaurante>{ //recibe un heroe
    return this.http.post<Restaurante>(this.baseUrl + '/restaurantes/', restaurante);
    //return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe); 
    //regresa un         <Heroe>  :Observable<Heroe>
  }
  actualizarRestaurante(restaurante: Restaurante):Observable<Restaurante>{//recibe un heroe
    return this.http.put<Restaurante>(this.baseUrl + '/restaurantes/' + restaurante.id, restaurante);    
    //return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe); 
        //regresa un         <Heroe>  :Observable<Heroe>
      }
      borrarRestaurante(id: string):Observable<any>{ //recibe un id, no devuelve nada
        return this.http.delete<any>(this.baseUrl+'/restaurantes/'+id); 
    }
  
}
