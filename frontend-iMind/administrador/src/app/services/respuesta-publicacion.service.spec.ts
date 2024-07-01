import { TestBed } from '@angular/core/testing';

import { RespuestaPublicacionService } from './respuesta-publicacion.service';

describe('RespuestaPublicacionService', () => {
  let service: RespuestaPublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaPublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
