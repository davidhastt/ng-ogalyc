import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../core/models/post.model';
import { PostsService } from '../services/posts.service';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    
    this.postsService.getRandomPost().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);

    });
    
  }

}





