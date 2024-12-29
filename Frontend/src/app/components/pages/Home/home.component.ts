import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../layout-area/header/header.component";
import { FooterComponent } from "../../layout-area/footer/footer.component";
import { RoutingComponent } from "../../layout-area/routing/routing.component";
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RoutingComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class homeComponent implements OnInit {
  activeRoute:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data)=>{
      if(data){
        this.jumpToSection(data)
      }
    })
  }

  jumpToSection(section:string){
    const element = document.getElementById(section)
    if(element){
      element.scrollIntoView({behavior:'smooth'})

    }
  }

}