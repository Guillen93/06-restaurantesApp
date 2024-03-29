import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {
  
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: Restaurante) { }

    ngOnInit(): void{
      console.log(this.data);
    }

  borrar(){
    this.dialogRef.close(true); //si quiere borrarlo
  }
  cerrar(){
    this.dialogRef.close();
  }

}
