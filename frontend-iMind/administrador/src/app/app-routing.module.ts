import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoUsuarioListaComponent } from './components/tipo-usuario-lista/tipo-usuario-lista.component';
import { TipoUsuarioFormComponent } from './components/tipo-usuario-form/tipo-usuario-form.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { EjercicioListaComponent } from './components/ejercicio-lista/ejercicio-lista.component';
import { EjercicioFormComponent } from './components/ejercicio-form/ejercicio-form.component';
import { PublicacionListaComponent } from './components/publicacion-lista/publicacion-lista.component';
import { PublicacionFormComponent } from './components/publicacion-form/publicacion-form.component';
import { RespuestaPublicacionListaComponent } from './components/respuesta-publicacion-lista/respuesta-publicacion-lista.component';
import { RespuestaPublicacionFormComponent } from './components/respuesta-publicacion-form/respuesta-publicacion-form.component';
import { MultimediaListaComponent } from './components/multimedia-lista/multimedia-lista.component';
import { MultimediaFormComponent } from './components/multimedia-form/multimedia-form.component';

export const routes: Routes = [
  { path: 'tipo-usuarios', component: TipoUsuarioListaComponent },
  { path: 'agregar-tipo-usuario', component: TipoUsuarioFormComponent },
  { path: 'editar-tipo-usuario/:id', component: TipoUsuarioFormComponent },
  { path: 'usuarios', component: UsuarioListaComponent },
  { path: 'agregar-usuario', component: UsuarioFormComponent },
  { path: 'editar-usuario/:id', component: UsuarioFormComponent },
  { path: 'ejercicios', component: EjercicioListaComponent },
  { path: 'ejercicios/agregar', component: EjercicioFormComponent },
  { path: 'ejercicios/editar/:id', component: EjercicioFormComponent },
  { path: 'publicaciones', component: PublicacionListaComponent },
  { path: 'publicaciones/agregar', component: PublicacionFormComponent },
  { path: 'publicaciones/editar/:id', component: PublicacionFormComponent },
  { path: 'respuestas-publicacion', component: RespuestaPublicacionListaComponent },
  { path: 'respuestas-publicacion/agregar', component: RespuestaPublicacionFormComponent },
  { path: 'respuestas-publicacion/editar/:id', component: RespuestaPublicacionFormComponent },
  { path: 'multimedias', component: MultimediaListaComponent },
  { path: 'multimedias/agregar', component: MultimediaFormComponent },
  { path: 'multimedias/editar/:id', component: MultimediaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
