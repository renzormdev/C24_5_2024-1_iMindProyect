import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaListaComponent } from './multimedia-lista.component';

describe('MultimediaListaComponent', () => {
  let component: MultimediaListaComponent;
  let fixture: ComponentFixture<MultimediaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultimediaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
