import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoPost: FormGroup;

  constructor() {
    this.nuevoPost = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(120),
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)
      ]),
      category: new FormControl('', [
        Validators.required
      ]),

    })
  }

  ngOnInit(): void {
  }


  getDataForm() {
    console.log(this.nuevoPost.value)

  }

}
