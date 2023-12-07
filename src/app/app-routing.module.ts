import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorModule ) },
  { path: 'autenticacion', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: '**', redirectTo: 'autenticacion' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
