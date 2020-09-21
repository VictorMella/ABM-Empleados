import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = [
    'Soltero(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viudo(a)',
  ];

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
  }

  ngOnInit(): void {}
}
