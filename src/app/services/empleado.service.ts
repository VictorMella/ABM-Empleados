import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  lsEmpleados: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez',
      correo: 'lmartinez@gmail.com',
      telefono: 3698521478,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Victor Mella',
      correo: 'v.mellaq@gmail.com',
      telefono: 3698521478,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
    },
    {
      nombreCompleto: 'Carolina Muñoz',
      correo: 'cmuñoz@gmail.com',
      telefono: 3698521478,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Casada',
    },
    {
      nombreCompleto: 'Agustin Mella',
      correo: 'amella@gmail.com',
      telefono: 3698521478,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Horacio Mella',
      correo: 'hmella@gmail.com',
      telefono: 3698521478,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Marco Mella',
      correo: 'mmella@gmail.com',
      telefono: 3698521478,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Carmen Quilodran',
      correo: 'cquilodran@gmail.com',
      telefono: 3698521478,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltera',
    },
  ];

  constructor() {}

  getempleados() {
    return this.lsEmpleados.slice();
  }

  deleteEmpleado(index: number) {
    this.lsEmpleados.splice(index, 1);
  }

  agregarEmpleado(objEmpleado: Empleado) {
    this.lsEmpleados.unshift(objEmpleado);
  }

  getEmpleado(index: number){
    return this.lsEmpleados[index];
  }

  editempleado(empleado: Empleado, index: number){
   this.lsEmpleados[index] = empleado;
  }
}
