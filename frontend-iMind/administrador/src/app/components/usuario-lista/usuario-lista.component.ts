import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: any[] = []; // Aquí deberías definir un arreglo para almacenar los usuarios

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes inicializar datos o llamar a métodos necesarios al iniciar el componente
    // Por ejemplo, podrías cargar usuarios desde un servicio aquí
    this.cargarUsuariosEstaticos(); // Método para cargar usuarios estáticos
  }

  cargarUsuariosEstaticos(): void {
    // Cargar usuarios estáticos como ejemplo
    this.usuarios = [
      { id: 1, nombre: 'Juan Pérez', descripcion: 'Usuario estándar' },
      { id: 2, nombre: 'María García', descripcion: 'Usuario administrador' }
    ];
  }

  // Métodos para editar o eliminar usuarios
  editarUsuario(id: number): void {
    // Implementar lógica de edición aquí
    console.log('Editar usuario con ID:', id);
  }

  eliminarUsuario(id: number): void {
    // Implementar lógica de eliminación aquí
    console.log('Eliminar usuario con ID:', id);
  }
}
