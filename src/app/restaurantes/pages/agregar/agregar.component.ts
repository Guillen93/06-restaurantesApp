import { Component } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  restaurante: Restaurante = {
    nombre: '',
    descripcion: '',
    telefono: '',
    direccion: '',
    email: '',
    wEB: '',
    capacidad: '',
    lat: '', lon: '',
    url: '',
    imagen: '',
    alt_img: ''

  }
  constructor(
    private restaurateService: RestaurantesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.restaurateService.getRestaurantesPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe(rest => this.restaurante = rest);     // FUNCIONA

  }

  guardar() {
    if (this.restaurante.nombre.trim().length === 0) { return; }
    if (this.restaurante.id) {
      this.restaurateService.actualizarRestaurante(this.restaurante)
        .subscribe(rest => {
          console.log('Actualizando', rest)
          this.restaurante = rest;
          this.mostrarSnackBar('Registro Actualizado');
        })
    }
    else {
      this.restaurateService.agregarRestaurante(this.restaurante)
        .subscribe(resp => {
          console.log('Respuesta', resp);
          this.mostrarSnackBar('Registro Creado');
          this.router.navigate(['/restaurantes/' + resp.id]);
        })
    }




  }
  borrarRestaurante() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.restaurante
      //CUIDADO, en typescript TODO se pasa por  referencia
      //Para que sea de solo lectura pondriamos {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        console.log(result); //true o undefined
        if (result) {
          this.restaurateService.borrarRestaurante(this.restaurante.id!)
            .subscribe(resp => {
              this.mostrarSnackBar('Registro borrado');
              this.router.navigate(['/heroes']);
            })
        }
      })
        // this.restaurateService.borrarRestaurante(this.restaurante.id!)
        //   .subscribe(resp => {
        //     console.log('Registro borrado', this.restaurante);
        //     this.mostrarSnackBar('Registro Borrado');
        //     this.router.navigate(['/restaurantes']);
        //   })
      }

  mostrarSnackBar(mensaje: string): void {
    //recibe un string y no regresa nada
    this.snackBar.open(mensaje, 'Cerrar', { duration: 2500 });
  }



}
