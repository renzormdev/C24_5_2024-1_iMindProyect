import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuarioService } from '../../services/tipo-usuario.service';
@Component({
  selector: 'app-tipo-usuario-lista',
  templateUrl: './tipo-usuario-lista.component.html',
  styleUrl: './tipo-usuario-lista.component.css'
})
export class TipoUsuarioListaComponent implements OnInit {

  tipoUsuarios: any[] = [];

  constructor(private router: Router, private tipoUsuarioService: TipoUsuarioService) { }

  ngOnInit(): void {
    this.obtenerTipoUsuarios();
  }

  obtenerTipoUsuarios(): void {
    this.tipoUsuarioService.obtenerTipoUsuarios().subscribe(data => {
      this.tipoUsuarios = data;
    });
  }

  editarTipoUsuario(id: number): void {
    this.router.navigate(['/tipo-usuarios/editar', id]);
  }

  eliminarTipoUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este tipo de usuario?')) {
      this.tipoUsuarioService.eliminarTipoUsuario(id).subscribe(() => {
        this.obtenerTipoUsuarios();  // Recargar la lista después de eliminar
      });
    }
  }

  agregarTipoUsuario(): void {
    this.router.navigate(['/tipo-usuarios/agregar']);
  }

}
