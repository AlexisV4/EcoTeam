import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PuntoDeRecoleccionComponent } from './business/punto-de-recoleccion/punto-de-recoleccion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, SidebarComponent, FooterComponent, PuntoDeRecoleccionComponent, RouterOutlet],
})
export class AppComponent {
  title = 'frontend';

}
