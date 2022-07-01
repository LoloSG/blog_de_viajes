import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostBlog } from 'src/app/interfaces/post.interface';
import { BlogsService } from 'src/app/services/blogs.service';


@Component({
  selector: 'app-vista-posts',
  templateUrl: './vista-posts.component.html',
  styleUrls: ['./vista-posts.component.css']
})
export class VistaPostsComponent implements OnInit {

  post: PostBlog | any;
  constructor(
    private blogsService: BlogsService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      this.post = this.blogsService.getById(id);
    })


  }



}
