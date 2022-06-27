import { Injectable } from '@angular/core';
import { POSTS } from '../db/productos.db'
import { PostBlog } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private arrPosts: PostBlog[] = []
  constructor() {
    this.arrPosts = POSTS

  }

  getAll(): PostBlog[] {
    return this.arrPosts;
  }


  getById(pId: number): PostBlog | any {
    return this.arrPosts.find(post => post.id === pId)
  }
}
