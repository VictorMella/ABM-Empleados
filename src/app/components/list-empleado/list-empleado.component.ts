import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MjeConfirmacionComponent } from '../shared/mje-confirmacion/mje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreCompleto',
    'correo',
    'estadoCivil',
    'fechaIngreso',
    'sexo',
    'telefono',
    'acciones',
  ];
  dataSource = new MatTableDataSource();
  lsEmpleados: Empleado[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.ngAfterViewInit();
    this.lsEmpleados = this.empleadoService.getempleados();
    this.dataSource = new MatTableDataSource(this.lsEmpleados);
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MjeConfirmacionComponent, {
      width: '350px',
      data: { name: 'Esta seguro de  eliminar e este empleado??' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        this.empleadoService.deleteEmpleado(index);
        this.snackBar.open('El empleado ha sido eliminado correctamente', '', {
          duration: 3000,
        });
        this.cargarEmpleados();
      }
    });
  }

}
