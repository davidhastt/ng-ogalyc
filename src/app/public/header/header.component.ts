import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [DatePipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  today: Date = new Date();
}
