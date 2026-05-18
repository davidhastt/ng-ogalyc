import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EjeService } from '../../core/services/eje.service';
import { PostModel } from '../../core/models/post.model';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';

@Component({
  selector: 'app-eje',
  imports: [TruncatePipe],
  templateUrl: './eje.component.html',
  styleUrl: './eje.component.css',
})
export class EjeComponent implements OnInit{
  id_eje: number = 0;
  //posts: PostModel[] = [];
  posts = signal<PostModel[]>([]);
  constructor(private route: ActivatedRoute, private ejeService: EjeService) {}

  ngOnInit(): void {
    // Usando paramMap.subscribe escuchamos los cambios en el parámetro
    this.route.paramMap.subscribe(params => {
      const id = params.get('id_eje');
      this.id_eje = id ? Number(id) : 0;

      this.ejeService.getPostByEje(this.id_eje).subscribe(response => {
        this.posts.set(response);
        console.log(this.posts());
      });

    });
  }

}
