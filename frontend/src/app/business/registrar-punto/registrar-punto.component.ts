import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-punto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-punto.component.html',
  styleUrl: './registrar-punto.component.css'
})
export class RegistrarPuntoComponent {
  puntoForm: FormGroup;

  private apiUrl = 'http://localhost:8080/api/puntos_recoleccion'; // Cambia esta URL

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.puntoForm = this.fb.group({
      nombre: [''],
      direccion: [''],
      latitud: [0],
      longitud: [0],
      horarios: [''],
      contacto: [''],
    });
  }

  onSubmit(): void {
    const punto = this.puntoForm.value;

    // Enviar la solicitud POST al backend
    this.http.post(this.apiUrl, punto).subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);
        alert('¡Punto registrado exitosamente!');
        this.puntoForm.reset();
      },
      error: (err) => {
        console.error('Error al registrar el punto:', err);
        alert('Hubo un error. Intenta nuevamente.');
      },
    });
  }
}
