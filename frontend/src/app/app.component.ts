import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PuntoDeRecoleccionComponent } from './business/punto-de-recoleccion/punto-de-recoleccion.component';
import { RegistrarPuntoComponent } from './business/registrar-punto/registrar-punto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent, PuntoDeRecoleccionComponent, RouterOutlet, RegistrarPuntoComponent],
})
export class AppComponent {
  currentView: string = 'puntosRecoleccion'; // Vista por defecto

  setView(view: string) {
    this.currentView = view;
  }

}
