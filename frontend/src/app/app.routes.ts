import {  Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { PuntoDeRecoleccionComponent } from './business/punto-de-recoleccion/punto-de-recoleccion.component';
import { RegistrarPuntoComponent } from './business/registrar-punto/registrar-punto.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página de Login
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'puntosDeRecoleccion', pathMatch: 'full' }, // Ruta por defecto dentro de Main
      { path: 'puntosDeRecoleccion', component: PuntoDeRecoleccionComponent },
      { path: 'registrarPunto', component: RegistrarPuntoComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirige cualquier ruta no encontrada al login
];


