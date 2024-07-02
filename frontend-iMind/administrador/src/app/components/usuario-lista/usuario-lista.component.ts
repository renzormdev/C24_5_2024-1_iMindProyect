import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarios: any[] = [];  // Define el tipo de tus usuarios correctamente

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  editarUsuario(id: string): void {
    this.router.navigate(['/editar-usuario', id]);
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(() => {
        this.cargarUsuarios();  // Recargar la lista después de eliminar
      });
    }
  }

  agregarUsuario(): void {
    this.router.navigate(['/agregar-usuario']);
  }
}
