import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../login/login.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('contrasena')?.value === form.get('confirmarContrasena')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    console.log('Formulario enviado', this.registerForm); // Añadir esta línea para depurar
    if (this.registerForm.valid) {
      const { confirmarContrasena, ...userData } = this.registerForm.value;
      console.log('Datos del usuario:', userData); // Añadir esta línea para depurar
      this.usuarioService.register(userData).subscribe(
        response => {
          console.log('Usuario registrado con éxito', response);
        },
        error => {
          console.error('Error al registrar usuario', error);
        }
      );
    }
  }
}
