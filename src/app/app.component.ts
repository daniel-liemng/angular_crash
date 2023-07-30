import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgUrl: string =
    'https://res.cloudinary.com/danhln/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688225698/ecommerce/xwdih0hanecja6im1tqn.jpg';

  bool: boolean = true;

  email: string = '';

  posts: string[] = ['Post 1', 'Post 2', 'Post 3'];

  objPosts = [
    { id: 1, name: 'Post A' },
    { id: 2, name: 'Post B' },
    { id: 3, name: 'Post C' },
  ];

  userDetails: any = {
    name: 'Nam',
    city: 'New York',
  };

  dummyText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum quis repellendus iure illo, voluptatum cupiditate harum quod fuga inventore sed ut cumque explicabo dignissimos id tempora, eos nemo asperiores similique facere numquam culpa quidem dicta laudantium? Laboriosam, repellendus. Enim velit totam, consequuntur illum non nesciunt! Mollitia aspernatur vero perferendis!';

  isActive: boolean = false;

  stepForm: string = '';

  chooseStep(step: string) {
    this.stepForm = step;
  }

  toggleColor() {
    this.bool = !this.bool;
  }

  addPost() {
    this.objPosts.push({ id: 4, name: 'Post 4' });
  }

  onDelete(post: any) {
    console.log('delete', post.id);

    this.objPosts = this.objPosts.filter((item) => item.id != post.id);
    console.log(this.objPosts);
  }

  // onKeyup(username: any) {
  //   console.log(username.value);
  // }

  onKeyup() {
    console.log(this.email);
  }
}
