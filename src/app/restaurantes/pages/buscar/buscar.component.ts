import { Component } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  restauranteEncontrado: boolean = false;
  termino: string = ''; // termino de busqueda
  resturantes: Restaurante[] = [];  // Ctrl + pto
  constructor(private restaurantesService: RestaurantesService) { }

  buscando() {
    //this.heroesService.getHeroes().subscribe(heroes => this.heroes=heroes); 
    this.restaurantesService.getSugerencias(this.termino).subscribe(rest => {
      if (rest.length === 0) { this.restauranteEncontrado = true; } else { this.restauranteEncontrado = false; }
      this.resturantes = rest;
    })

  }
  restauranteSeleccionado!: Restaurante;
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const restaurante: Restaurante = event.option.value;
    //console.log(restaurante);
    this.termino = restaurante.nombre; //para que se vea en el input
    this.restaurantesService.getRestaurantesPorId(restaurante.id!)
      .subscribe(rest => this.restauranteSeleccionado = rest);
  }


}
