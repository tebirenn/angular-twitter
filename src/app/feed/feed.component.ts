import { Component } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  likePost(post: Post) {
    post.likes++;
  }
}
