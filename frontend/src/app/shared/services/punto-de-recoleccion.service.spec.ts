import { TestBed } from '@angular/core/testing';

import { PuntoDeRecoleccionService } from './punto-de-recoleccion.service';

describe('PuntoDeRecoleccionService', () => {
  let service: PuntoDeRecoleccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoDeRecoleccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
