import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Leftsidebar } from './layout/leftsidebar/leftsidebar';
import { Maincolumn } from './layout/maincolumn/maincolumn';
import { Rigthsidebar } from './layout/rigthsidebar/rigthsidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Leftsidebar, Footer, Maincolumn, Rigthsidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ogalyc');
}
