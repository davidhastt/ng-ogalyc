import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../../core/models/post.model'; 
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root',
})

export class PostsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  
  getRandomPost(): Observable<PostModel[]> {    
    return this.http.get<PostModel[]>(`${this.apiUrl}/getRandomPost.php`);
  }
  
}
