import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { PostBlog } from 'src/app/interfaces/post.interface';
import { BlogsService } from 'src/app/services/blogs.service';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-vista-posts',
  templateUrl: './vista-posts.component.html',
  styleUrls: ['./vista-posts.component.css']
})
export class VistaPostsComponent implements OnInit {

  post: PostBlog | any;
  arrCategories: Category[] = [];
  constructor(
    private blogsService: BlogsService,
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      this.post = this.blogsService.getById(id);

    })

  }

  // printCategory(pIdCategory: number): string {
  //   let categoria: PostBlog = this.categoriesService.getById(pIdCategory);
  //   return categoria.titulo
  // }


}
