import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'docentes', loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorModule ) },
  { path: '**', redirectTo: 'docentes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
