import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { Error404Component } from './components/error404/error404.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "card-blog/:idpost", component: CardBlogComponent },
  { path: "##", component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
