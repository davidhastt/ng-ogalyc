
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { PostModel } from '../../core/models/post.model';
import { PostsService } from '../../core/services/posts.service';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { EdicionesComponent } from '../ediciones/ediciones.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe,EdicionesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {  
  posts = signal<PostModel[]>([]);

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    
    this.postsService.getRandomPost().subscribe((posts) => {      
      this.posts.set(posts);
      //console.log(this.posts);

    });
    
  }

}





