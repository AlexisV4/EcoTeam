import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:8080/api/puntos_recoleccion';

  constructor(private http: HttpClient) {}

  getPuntosRecoleccion(): Observable<PuntoRecoleccion[]> {
    return this.http.get<PuntoRecoleccion[]>(this.apiUrl);
  }

  eliminarPunto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' }); 
  }

  actualizarPunto(punto: PuntoRecoleccion): Observable<PuntoRecoleccion> {
    const url = `${this.apiUrl}/${punto.id}`;
    return this.http.put<PuntoRecoleccion>(url, punto);
  }
}
