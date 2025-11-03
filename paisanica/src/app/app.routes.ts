import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'utilidades/configuracion',
    pathMatch: 'full'
  },
  {
    path: 'utilidades/configuracion',
    loadComponent: () => import('./menus/utilidades/configuracion/configuracion').then(m => m.ConfiguracionComponent)
  }
];