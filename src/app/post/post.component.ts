import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Array<any> = [];

  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }

  ngOnInit(): void {}

  addNewPost() {
    let newPost: Post = { id: 4, title: 'Post 4.1', content: 'Content 4' };

    this.postService.addPost(newPost);
  }
}
