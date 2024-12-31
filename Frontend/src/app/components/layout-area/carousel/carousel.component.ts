import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild("next") nextButton!: ElementRef;
  @ViewChild("prev") prevButton!: ElementRef;
  @ViewChild("back") backButton!: ElementRef;
  @ViewChild("carousel") carousel!: ElementRef;
  @ViewChild("list") listHtml!: ElementRef;
  @ViewChildren("item") items!: QueryList<ElementRef>;
  @ViewChildren("seeMore") seeMoreButtons!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.carousel);
  }

  showSlider(type: string) {
    this.carousel.nativeElement.classList.remove('prev','next')
    if (type === "next") {
      const firstChild = this.listHtml.nativeElement.firstChild; // Get the first child of the list
      if (firstChild) {
        this.listHtml.nativeElement.appendChild(firstChild); // Add it back to the end
        this.carousel.nativeElement.classList.add('next')
  
      } else {
        console.warn("No first child found in the list");
      }
    } else if(type === "prev"){
const lastChild = this.listHtml.nativeElement.lastChild
if(lastChild){
  this.listHtml.nativeElement.prepend(lastChild)
  this.carousel.nativeElement.classList.add('prev')

}else {
  console.warn("No first child found in the list");
}
    }
  }
  
}
