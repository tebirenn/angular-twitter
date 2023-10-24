import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  postText: string = '';

  constructor(private postService: PostService, private router: Router) {}

  createPost() {
    if (this.postText) {
      this.postService.createPost(this.postText);
      this.postText = ''; 
      this.router.navigateByUrl('/feed');
    }
  }
}
