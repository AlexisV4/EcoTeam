import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PuntoDeRecoleccionService, PuntoRecoleccion } from '../../shared/services/punto-de-recoleccion.service';
import * as L from 'leaflet';
import { tileLayer } from 'leaflet';

@Component({
  selector: 'app-punto-de-recoleccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-de-recoleccion.component.html',
  styleUrls: ['./punto-de-recoleccion.component.css']
})
export class PuntoDeRecoleccionComponent implements OnInit {
  puntosRecoleccion: PuntoRecoleccion[] = [];
  puntoSeleccionado: PuntoRecoleccion | null = null;
  map: L.Map | undefined;

  constructor(private puntoDeRecoleccionService: PuntoDeRecoleccionService) {}

  ngOnInit(): void {
    this.initMap();
    this.getPuntosRecoleccion();
  }

  initMap(): void {
    this.map = new L.Map('map').setView([6.27000000, -75.59000000], 13); 
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  getPuntosRecoleccion(): void {
    this.puntoDeRecoleccionService.getPuntosRecoleccion().subscribe(
      (data) => {
        console.log('Puntos de recolección:', data); 
        this.puntosRecoleccion = data;
        this.loadMarkers();
      },
      (error) => {
        console.error('Error al obtener los puntos de recolección:', error);
      }
    );
  }

  loadMarkers(): void {
    this.puntosRecoleccion.forEach((ubicacion) => {
      const lat = Number(ubicacion.latitud);  
      const lon = Number(ubicacion.longitud); 

      console.log(`Cargando marcador: ${ubicacion.nombre} - Lat: ${lat}, Lon: ${lon}`);

      
      const marker = L.marker([lat, lon]).addTo(this.map!);

      
      marker.bindPopup(
        `<b>${ubicacion.nombre}</b><br>${ubicacion.direccion}<br>${ubicacion.horarios}<br>${ubicacion.contacto}`
      );
    });
  }

  centrarEnPunto(punto: PuntoRecoleccion): void {
    if (this.map) {
      const lat = Number(punto.latitud);
      const lon = Number(punto.longitud);

      this.map.setView([lat, lon], 14);  
      L.marker([lat, lon]).addTo(this.map)
        .bindPopup(
          `<b>${punto.nombre}</b><br>${punto.direccion}<br>${punto.horarios}<br>${punto.contacto}`
        );
    }
  }

  eliminarPunto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este punto de recolección?')) {
      this.puntoDeRecoleccionService.eliminarPunto(id).subscribe(
        () => {
          this.puntosRecoleccion = this.puntosRecoleccion.filter(p => p.id !== id);
          alert('Punto de recolección eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar el punto:', error);
          alert('Hubo un error al eliminar el punto');
        }
      );
    }
  }

  seleccionarPunto(punto: PuntoRecoleccion): void {
    // Duplicamos el objeto para evitar cambios directos en la lista
    this.puntoSeleccionado = { ...punto };
  }

  cancelarEdicion(): void {
    this.puntoSeleccionado = null;
  }

  actualizarPunto(): void {
    if (this.puntoSeleccionado) {
      this.puntoDeRecoleccionService.actualizarPunto(this.puntoSeleccionado).subscribe(
        (puntoActualizado) => {
          // Actualizamos el punto en la lista local
          const index = this.puntosRecoleccion.findIndex(p => p.id === puntoActualizado.id);
          if (index > -1) {
            this.puntosRecoleccion[index] = puntoActualizado;
          }
          alert('Punto de recolección actualizado correctamente');
          this.puntoSeleccionado = null; // Cerramos el formulario
        },
        (error) => {
          console.error('Error al actualizar el punto:', error);
          alert('Hubo un error al actualizar el punto');
        }
      );
    }
  }
  
}
