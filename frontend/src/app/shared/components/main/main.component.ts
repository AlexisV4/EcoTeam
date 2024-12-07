import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PuntoDeRecoleccionComponent } from '../../../business/punto-de-recoleccion/punto-de-recoleccion.component';
import { RegistrarPuntoComponent } from '../../../business/registrar-punto/registrar-punto.component';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
  
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}
