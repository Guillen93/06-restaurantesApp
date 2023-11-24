import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Restaurante} from '../interfaces/restaurantes.interfaces'
@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
  getRestaurantes(): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>('http://localhost:3000/restaurantes');
  } 
  getRestaurantesPorId(id:string): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>('http://localhost:3000/restaurantes/?Id='+id);
  }

}
