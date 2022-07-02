import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { PostBlog } from 'src/app/interfaces/post.interface';
import { BlogsService } from 'src/app/services/blogs.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-lista-blogs',
  templateUrl: './lista-blogs.component.html',
  styleUrls: ['./lista-blogs.component.css']
})
export class ListaBlogsComponent implements OnInit {

  posts: PostBlog[] = [];
  arrCategories: Category[] = [];
  constructor(
    private blogsServices: BlogsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {

    this.posts = this.blogsServices.getAll();
    this.arrCategories = this.categoriesService.getAll();

  }

  getCategory($event: any): void {
    let idCategory = Number($event.target.value);
    this.posts = this.blogsServices.filterByCategory(idCategory);
  }

  printCategory(pIdCategory: number): string {
    let categoria: Category = this.categoriesService.getById(pIdCategory);
    return categoria.titulo
  }

}
