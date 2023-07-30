import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList: Array<any> = [
    { id: 1, title: 'Post 1.1', content: 'Content 1' },
    { id: 2, title: 'Post 2.1', content: 'Content 2' },
    { id: 3, title: 'Post 3.1', content: 'Content 3' },
  ];

  addPost(item: any) {
    this.postList.push(item);
  }
}
