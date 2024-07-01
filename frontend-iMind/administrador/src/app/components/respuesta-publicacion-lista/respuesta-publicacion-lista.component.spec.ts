import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPublicacionListaComponent } from './respuesta-publicacion-lista.component';

describe('RespuestaPublicacionListaComponent', () => {
  let component: RespuestaPublicacionListaComponent;
  let fixture: ComponentFixture<RespuestaPublicacionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespuestaPublicacionListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestaPublicacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
