import { Component } from '@angular/core';
import { homeComponent } from "../../pages/Home/home.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [homeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
