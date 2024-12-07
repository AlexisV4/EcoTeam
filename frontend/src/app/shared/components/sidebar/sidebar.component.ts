import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  onClickPuntosRecoleccion() {
    console.log('Puntos de recolección clickeado');
    this.router.navigate(['/main/puntosDeRecoleccion']);
  }

  onClickRegistrarPunto() {
    console.log('Puntos de Registro clickeado');
    this.router.navigate(['/main/registrarPunto']);
  }

}
