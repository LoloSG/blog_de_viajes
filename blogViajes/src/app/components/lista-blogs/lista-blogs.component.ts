import { Component, OnInit } from '@angular/core';
import { PostBlog } from 'src/app/interfaces/post.interface';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-lista-blogs',
  templateUrl: './lista-blogs.component.html',
  styleUrls: ['./lista-blogs.component.css']
})
export class ListaBlogsComponent implements OnInit {

  posts: PostBlog[] = []
  constructor(private blogsServices: BlogsService) { }

  ngOnInit(): void {

    this.posts = this.blogsServices.getAll();
  }

}
