import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {
  restaurante!: Restaurante;
  constructor(private activatedRoute: ActivatedRoute, private restaurantesService: RestaurantesService,   private router:Router) { }


  id!: string;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.id = this.activatedRoute.snapshot.params['id'];
    this.restaurantesService.getRestaurantesPorId(this.id).subscribe(rest => this.restaurante = rest);

  }
  regresar(){
    this.router.navigate(['/restaurantes/listado']);
  }

}
