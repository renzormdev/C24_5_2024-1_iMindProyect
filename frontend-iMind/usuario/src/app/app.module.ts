import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { ForoComponent } from './components/foro/foro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { RegisterComponent } from './components/register/register.component';
import { SonidosComponent } from './components/sonidos/sonidos.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ForoComponent,
    HomeComponent,
    LoginComponent,
    NavmenuComponent,
    RegisterComponent,
    SonidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
