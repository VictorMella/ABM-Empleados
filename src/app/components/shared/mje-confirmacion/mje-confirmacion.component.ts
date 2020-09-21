import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mje-confirmacion',
  templateUrl: './mje-confirmacion.component.html',
  styleUrls: ['./mje-confirmacion.component.css'],
})
export class MjeConfirmacionComponent implements OnInit {
  mensaje: string;
  btn = 'aceptar';

  constructor(
    public dialogRef: MatDialogRef<MjeConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mensaje = data.name;
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
