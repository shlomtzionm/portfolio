// import { ChangeDetectionStrategy, Component, inject, Input, model, signal } from "@angular/core";
// import { MatMenuModule } from "@angular/material/menu";
// import { MatButtonModule } from "@angular/material/button";
// import { MatIcon } from "@angular/material/icon";
// import { FormsModule } from "@angular/forms";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
// import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import { UpdateComponent } from "../update/update.component";
// import { MatSnackBar } from "@angular/material/snack-bar";
// import { DialogConfig } from "@angular/cdk/dialog";
// import { ChangeModel } from "../../../models/change.model";


// export interface DialogData {
//   change: ChangeModel
// }


// @Component({
//   selector: "app-action-menu",
//   standalone: true,
//   imports: [MatMenuModule, MatButtonModule, MatIcon,MatFormFieldModule, MatInputModule, FormsModule,],
//   templateUrl: "./action-menu.component.html",
//   styleUrl: "./action-menu.component.css",
//   changeDetection:ChangeDetectionStrategy.OnPush,
// })


// export class ActionMenuComponent {
//   @Input() deleteChange: (_id: string) => void;
//   @Input() updateChange: (_id: string,change:ChangeModel) => void;
//   @Input() change: ChangeModel;

//   private _snackBar = inject(MatSnackBar);

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);
//   }

//   public  triggerDelete() {
//     try {
//       this.deleteChange(this.change._id);
//     } catch (error: any) {
//       this.openSnackBar("Something went wrong","X")
//     }
//   }

//   public triggerUpdate(res:ChangeModel){
//     try {
// this.updateChange(this.change._id,res)    

//     } catch (error:any) {
//       console.log(error);

//       this.openSnackBar("Something went wrong","X")
      
//     }
//   }


//   readonly dialog = inject(MatDialog);

//   openDialog(): void {
//     const dialogConfig = new MatDialogConfig<any>()
//     const chosenChange = {...this.change}
// dialogConfig.data = {change : chosenChange} 

//     const dialogRef = this.dialog.open(UpdateComponent,dialogConfig);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(result);
      
//       if (result) {
//         this.triggerUpdate(result); // Trigger update only if result exists
//       } else {
//         console.log('Dialog closed without update');
//       }
//     });}
// }
