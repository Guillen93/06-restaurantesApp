import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RestaurantesRountingModule } from './restaurantes-rounting.module';
import { MaterialModule } from '../material/material.module';
import { RestauranteTarjetaComponent } from './components/restaurante-tarjeta/restaurante-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    RestauranteComponent,
    HomeComponent,
    ListadoComponent,
    RestauranteTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    RestaurantesRountingModule,
    MaterialModule
  ]
})
export class RestaurantesModule { }
