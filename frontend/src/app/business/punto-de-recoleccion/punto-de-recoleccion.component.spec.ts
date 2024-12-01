import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeRecoleccionComponent } from './punto-de-recoleccion.component';

describe('PuntoDeRecoleccionComponent', () => {
  let component: PuntoDeRecoleccionComponent;
  let fixture: ComponentFixture<PuntoDeRecoleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoDeRecoleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntoDeRecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
