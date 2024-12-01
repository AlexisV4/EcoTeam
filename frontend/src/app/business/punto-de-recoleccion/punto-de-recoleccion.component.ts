import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoDeRecoleccionService, PuntoRecoleccion } from '../../shared/services/punto-de-recoleccion.service';
import * as L from 'leaflet';
import { tileLayer } from 'leaflet';

@Component({
  selector: 'app-punto-de-recoleccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto-de-recoleccion.component.html',
  styleUrls: ['./punto-de-recoleccion.component.css']
})
export class PuntoDeRecoleccionComponent implements OnInit {
  puntosRecoleccion: PuntoRecoleccion[] = [];
  map: L.Map | undefined;

  constructor(private puntoDeRecoleccionService: PuntoDeRecoleccionService) {}

  ngOnInit(): void {
    this.initMap();
    this.getPuntosRecoleccion();
  }

  // Inicializa el mapa
  initMap(): void {
    // Inicializa el mapa con un zoom general para el área donde se encuentran los puntos de recolección
    this.map = new L.Map('map').setView([6.27000000, -75.59000000], 13);  // Ajusta a la ubicación inicial correcta (por ejemplo, Bello)
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  // Obtiene los puntos de recolección desde el servicio
  getPuntosRecoleccion(): void {
    this.puntoDeRecoleccionService.getPuntosRecoleccion().subscribe(
      (data) => {
        console.log('Puntos de recolección:', data); // Verifica los datos recibidos
        this.puntosRecoleccion = data;
        this.loadMarkers();
      },
      (error) => {
        console.error('Error al obtener los puntos de recolección:', error);
      }
    );
  }

  // Carga los marcadores en el mapa
  loadMarkers(): void {
    this.puntosRecoleccion.forEach((ubicacion) => {
      // Asegúrate de que las coordenadas sean números
      const lat = Number(ubicacion.latitud);  // Convierte latitud a número
      const lon = Number(ubicacion.longitud); // Convierte longitud a número

      // Verificar que las coordenadas y el nombre sean correctos
      console.log(`Cargando marcador: ${ubicacion.nombre} - Lat: ${lat}, Lon: ${lon}`);

      // Añade el marcador a la posición correcta con el nombre correcto
      const marker = L.marker([lat, lon]).addTo(this.map!);

      // Usamos el nombre de la ubicación, que debe ser único
      marker.bindPopup(
        `<b>${ubicacion.nombre}</b><br>${ubicacion.direccion}<br>${ubicacion.horarios}<br>${ubicacion.contacto}`
      );
    });
  }

  // Centra el mapa en el punto de recolección seleccionado
  centrarEnPunto(punto: PuntoRecoleccion): void {
    if (this.map) {
      // Asegúrate de que las coordenadas sean correctas antes de usarlas
      const lat = Number(punto.latitud);
      const lon = Number(punto.longitud);

      // Ajusta la vista del mapa al punto seleccionado
      this.map.setView([lat, lon], 14);  // Ajusta el zoom al nivel que prefieras
      L.marker([lat, lon]).addTo(this.map)
        .bindPopup(
          `<b>${punto.nombre}</b><br>${punto.direccion}<br>${punto.horarios}<br>${punto.contacto}`
        );
    }
  }
}
