import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  myPostList: Array<any> = [];

  constructor(private postService: PostService) {
    this.myPostList = postService.postList;
  }

  ngOnInit(): void {}
}
