import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class page404Component {

  public getImageUrl (imageName:string){
return appConfig.imageUrl + imageName
  }

}
