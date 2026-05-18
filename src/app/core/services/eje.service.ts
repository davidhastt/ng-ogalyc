import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../../core/models/post.model'; 
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class EjeService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  
  getPostByEje(id_tema: number): Observable<PostModel[]> {    
    return this.http.get<PostModel[]>(`${this.apiUrl}/getFilesXtema.php?id_tema=${id_tema}`);
  }
  


}
