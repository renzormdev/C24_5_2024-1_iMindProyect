import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TipoUsuarioListaComponent,
    TipoUsuarioFormComponent,
    UsuarioListaComponent,
    UsuarioFormComponent,
    EjercicioListaComponent,
    EjercicioFormComponent,
    PublicacionListaComponent,
    PublicacionFormComponent,
    RespuestaPublicacionListaComponent,
    RespuestaPublicacionFormComponent,
    MultimediaListaComponent,
    MultimediaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
