import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  private apiUrl = 'http://localhost:4000/api/tipo_usuario';

  constructor(private http: HttpClient) { }

  obtenerTipoUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerTipoUsuarioPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarTipoUsuario(tipoUsuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tipoUsuario);
  }

  actualizarTipoUsuario(id: string, tipoUsuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tipoUsuario);
  }

  eliminarTipoUsuario(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
