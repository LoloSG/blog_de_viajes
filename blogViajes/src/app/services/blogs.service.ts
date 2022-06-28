import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db'
import { PostBlog } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private arrPosts: PostBlog[] = []
  private id: number = 4;
  constructor() {
    this.arrPosts = POSTS

  }

  getAll(): PostBlog[] {
    return this.arrPosts;
  }


  getById(pId: number): PostBlog | any {
    return this.arrPosts.find(post => post.id === pId)
  }

  addPost(pForm: any): any {
    pForm.id = this.id;
    let posicion = this.arrPosts.push(pForm);
    // this.arrPosts.push(pForm);
    this.id++
    return (posicion) ? true : false;
  }
}
