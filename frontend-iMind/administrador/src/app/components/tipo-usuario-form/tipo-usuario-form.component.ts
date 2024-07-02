import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoUsuarioService } from '../../services/tipo-usuario.service';  // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-tipo-usuario-form',
  templateUrl: './tipo-usuario-form.component.html',
  styleUrls: ['./tipo-usuario-form.component.css']
})
export class TipoUsuarioFormComponent implements OnInit {
  tipoUsuarioForm: FormGroup;
  tipoUsuarioId: string | null = null;  // Inicializamos tipoUsuarioId

  constructor(
    private fb: FormBuilder,
    private tipoUsuarioService: TipoUsuarioService,  // Asegúrate de injectar el servicio correcto
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tipoUsuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipoUsuarioId = params['id'] ? params['id'] : null;  // Verificamos si hay un ID en los parámetros
      if (this.tipoUsuarioId) {
        this.loadTipoUsuario(this.tipoUsuarioId);
      }
    });
  }

  loadTipoUsuario(id: string): void {
    this.tipoUsuarioService.obtenerTipoUsuarioPorId(id).subscribe(tipoUsuario => {
      this.tipoUsuarioForm.patchValue(tipoUsuario);
    });
  }

  guardarTipoUsuario(): void {
    if (this.tipoUsuarioForm.valid) {
      if (this.tipoUsuarioId) {
        this.tipoUsuarioService.actualizarTipoUsuario(this.tipoUsuarioId, this.tipoUsuarioForm.value).subscribe(() => {
          this.router.navigate(['/tipo-usuarios']);
        });
      } else {
        this.tipoUsuarioService.agregarTipoUsuario(this.tipoUsuarioForm.value).subscribe(() => {
          this.router.navigate(['/tipo-usuarios']);
        });
      }
    }
  }
}
