import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioListaComponent } from './tipo-usuario-lista.component';

describe('TipoUsuarioListaComponent', () => {
  let component: TipoUsuarioListaComponent;
  let fixture: ComponentFixture<TipoUsuarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoUsuarioListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoUsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
