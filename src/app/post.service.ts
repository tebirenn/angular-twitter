import { Injectable } from '@angular/core';

export interface Post {
  text: string;
  likes: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  createPost(postText: string) {
    this.posts.push({ text: postText, likes: 0 });
  }

  getPosts() {
    return this.posts;
  }
}
