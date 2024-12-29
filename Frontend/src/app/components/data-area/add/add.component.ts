// import { Component,inject } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { ChangeModel } from '../../../models/change.model';
// import { ChangeService } from '../../../services/change.service';

// @Component({
//   selector: 'app-add',
//   standalone: true,
//   imports: [],
//   templateUrl: './add.component.html',
//   styleUrl: './add.component.css'
// })
// export class AddComponent {


//   constructor(private changeService: ChangeService, private router:Router,private _snackBar :MatSnackBar){}

//   public change:ChangeModel = new ChangeModel()

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);}



//   public async send(){
//     try {
//       await this.changeService.addChange(this.change)
//       this.openSnackBar("You added a transaction", "X")
//       this.router.navigateByUrl("/list")
//     } catch (error:any) {
//       this.openSnackBar("Something went wrong", "X")
//     }
//   }

//   public setImage(event: Event) {
//     const input = event.target as HTMLInputElement;
//     const image = input.files[0];
    
//     this.change.image = image
     
//   }
// }
