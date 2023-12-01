import { Pipe, PipeTransform } from '@angular/core';
import { Restaurante } from '../interfaces/restaurantes.interfaces';

@Pipe({
  name: 'imagen',
  pure:false
})
export class ImagenPipe implements PipeTransform {

  transform(restaurante:Restaurante): string {
    if (!restaurante.id ){
      return 'assets/Fotos/noimages.jpg'; 
    }else if (restaurante.alt_img){
      return restaurante.alt_img;
    }
    return 'assets/Fotos/' + restaurante.imagen;
  }


}


