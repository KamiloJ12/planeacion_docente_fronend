import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDocentesComponent } from './pages/listar-docentes/listar-docentes.component';
import { AgregarDocenteComponent } from './pages/agregar-docente/agregar-docente.component';
import { AdministradorLayoutComponent } from './layout/administrador-layout/administrador-layout.component';

const routes: Routes = [
  { 
    path: 'administrador', 
    /* component: AdministradorLayoutComponent, */
    children: [
      { path: '', component: ListarDocentesComponent },
      { path: 'agregar', component: AgregarDocenteComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: '**', redirectTo: 'administrador' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
