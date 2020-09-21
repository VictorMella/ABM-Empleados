import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { MjeConfirmacionComponent } from './components/shared/mje-confirmacion/mje-confirmacion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpleadoComponent,
    NavbarComponent,
    ListEmpleadoComponent,
    MjeConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
