import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RigthSidebarComponent } from '../rigthsidebar/rigthsidebar.component';
import { MainColumnComponent } from "../maincolumn/maincolumn.component";
import { LeftSidebarComponent } from '../leftsidebar/leftsidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, RigthSidebarComponent, MainColumnComponent, LeftSidebarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

}
