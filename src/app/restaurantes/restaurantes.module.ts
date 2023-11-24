import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RestaurantesRountingModule } from './restaurantes-rounting.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    RestauranteComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRountingModule
  ]
})
export class RestaurantesModule { }
