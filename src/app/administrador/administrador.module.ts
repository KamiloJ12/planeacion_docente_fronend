import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AgregarDocenteComponent } from './pages/agregar-docente/agregar-docente.component';
import { ListarDocentesComponent } from './pages/listar-docentes/listar-docentes.component';
import { AdministradorLayoutComponent } from './layout/administrador-layout/administrador-layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';


@NgModule({
  declarations: [
    AgregarDocenteComponent,
    ListarDocentesComponent,
    AdministradorLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdministradorModule { }
