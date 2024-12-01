import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la interfaz de los puntos de recolección
export interface PuntoRecoleccion {
  id: number;
  nombre: string;
  direccion: string;
  latitud: number;
  longitud: number;
  horarios: string;
  contacto: string;
}

@Injectable({
  providedIn: 'root'
})
export class PuntoDeRecoleccionService {
  // URL de tu API (ajústalo según el servidor que estés usando)
  private apiUrl = 'http://localhost:8080/api/puntos_recoleccion';

  constructor(private http: HttpClient) {}

  // Método para obtener los puntos de recolección
  getPuntosRecoleccion(): Observable<PuntoRecoleccion[]> {
    return this.http.get<PuntoRecoleccion[]>(this.apiUrl);
  }
}
