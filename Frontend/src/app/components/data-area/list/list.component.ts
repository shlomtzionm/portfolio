// import { Component, inject,onInit } from '@angular/core';
// import { ChangeService } from '../../../services/change.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { ChangeModel } from '../../../models/change.model';
// @Component({
//   selector: 'app-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './list.component.html',
//   styleUrl: './list.component.css'
// })
// export class ListComponent implements OnInit {
//   changeService: any;

//   constructor (private changeServices: ChangeService,private _snackBar: MatSnackBar){}

//   public change : ChangeModel[]

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);}

//     public async ngOnInit(){
//     try {
//     this.change = await this.changeServices.getAllChange()
      
//     } catch (error:any) {
//       this._snackBar.open("Something went wrong","X")
//     }
//   }

//   // public deleteChange = async (_id: string) => {
//   //   try {
//   //       await this.changeService.deleteChange(_id);
//   //       this.change = this.change.filter((t) => t._id !== _id);

//   //       this.openSnackBar("change deleted successfully","X")
//   //   } catch (error: any) {
//   //     console.log(error);
//   //     this.openSnackBar("Something went wrong", "X")
//   //   }
//   // };


  
//   // public  updateChange= async(_id:string, change:changeModel)=>{
//   //   try {
//   //     await this.changeService.updateChange(_id,change)
//   //     this.change = this.change.filter(t=>change._id !== _id)
//   //     this.change.push(change)
//   //   this.openSnackBar("well done", "X")
//   //   } catch (error:any) {
      
//   //     this.openSnackBar("something went wrong", "X")
//   //   }
//   //     }
// }
