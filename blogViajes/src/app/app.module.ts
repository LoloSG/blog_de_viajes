import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaBlogsComponent } from './components/lista-blogs/lista-blogs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Error404Component } from './components/error404/error404.component';
import { RecortarTextoPipe } from './pipes/recortar-texto.pipe';
import { VistaPostsComponent } from './components/vista-posts/vista-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    ListaBlogsComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    RecortarTextoPipe,
    VistaPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
