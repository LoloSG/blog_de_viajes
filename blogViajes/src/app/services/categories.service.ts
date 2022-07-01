import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  arrCategories: Category[] = [];
  constructor() {

    this.arrCategories = [
      {
        id: 1,
        titulo: 'Europa'
      },
      {
        id: 2,
        titulo: 'África'
      },
      {
        id: 3,
        titulo: 'Asia'
      },
      {
        id: 4,
        titulo: 'América'
      },
      {
        id: 5,
        titulo: 'Oceanía'
      },
    ]

  }

  getAll(): Category[] {
    return this.arrCategories;
  }

  getById(pId: number): Category | any {
    return this.arrCategories.find(category => category.id === pId)
  }


}
