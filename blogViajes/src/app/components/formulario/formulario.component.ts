import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { BlogsService } from 'src/app/services/blogs.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoPost: FormGroup;

  arrCategories: Category[] = []
  constructor(
    private blogsServices: BlogsService,
    private router: Router,
    private categoriesServices: CategoriesService
  ) {
    this.nuevoPost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(120),
      ]),
      fecha: new FormControl('', [
        Validators.required,
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),

    })
  }

  ngOnInit(): void {
    this.arrCategories = this.categoriesServices.getAll()
  }


  getDataForm() {
    let peticion = this.blogsServices.addPost(this.nuevoPost.value)
    if (peticion) {
      this.router.navigate(['/home'])
    } else {
      alert('el post no se ha podido enviar')
    }

  }



}
