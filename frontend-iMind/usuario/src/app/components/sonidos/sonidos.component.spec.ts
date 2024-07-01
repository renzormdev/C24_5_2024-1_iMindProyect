import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonidosComponent } from './sonidos.component';

describe('SonidosComponent', () => {
  let component: SonidosComponent;
  let fixture: ComponentFixture<SonidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
