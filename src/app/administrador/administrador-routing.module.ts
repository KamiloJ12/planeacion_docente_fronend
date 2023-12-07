import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDocentesComponent } from './pages/listar-docentes/listar-docentes.component';
import { AgregarDocenteComponent } from './pages/agregar-docente/agregar-docente.component';
import { AdministradorLayoutComponent } from './layout/administrador-layout/administrador-layout.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';

const routes: Routes = [
  { 
    path: 'docentes', 
    component: AdministradorLayoutComponent, 
    children: [
      { path: '', component: AdministradorComponent },
      { path: 'agregar', component: AgregarDocenteComponent },
      { path: 'editar/:id', component: AgregarDocenteComponent },
      { path: 'listar', component: ListarDocentesComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: '**', redirectTo: 'docentes' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
