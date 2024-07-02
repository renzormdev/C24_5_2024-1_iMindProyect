import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:4000/api/usuarios'; // Cambia esto según tu configuración

    constructor(private http: HttpClient) { }

    register(usuario: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, usuario);
    }

}
