import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RigthSidebarComponent } from '../rigthsidebar/rigthsidebar.component';
//import { HomeComponent } from "../home/home.component";
import { LeftSidebarComponent } from '../leftsidebar/leftsidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent, RigthSidebarComponent, LeftSidebarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

}
