import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPublicacionFormComponent } from './respuesta-publicacion-form.component';

describe('RespuestaPublicacionFormComponent', () => {
  let component: RespuestaPublicacionFormComponent;
  let fixture: ComponentFixture<RespuestaPublicacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespuestaPublicacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestaPublicacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
