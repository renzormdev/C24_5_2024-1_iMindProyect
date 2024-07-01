import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { ForoComponent } from './components/foro/foro.component';
import { SonidosComponent } from './components/sonidos/sonidos.component';

export const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'foro', component: ForoComponent},
  { path: 'sonidos', component: SonidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
