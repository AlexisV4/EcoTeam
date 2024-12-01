import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPuntoComponent } from './registrar-punto.component';

describe('RegistrarPuntoComponent', () => {
  let component: RegistrarPuntoComponent;
  let fixture: ComponentFixture<RegistrarPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPuntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
