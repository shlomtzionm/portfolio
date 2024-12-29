// import { Component, inject, model } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { MatButtonModule } from "@angular/material/button";
// import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
// import { DialogData } from "../action-menu/action-menu.component";
// import { categoryModel } from "../../../models/category-model";
// import { ChangeService } from "../../../services/change.service";
// import { MatSnackBar } from "@angular/material/snack-bar";
// import { MatIconModule } from "@angular/material/icon";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { CommonModule } from "@angular/common";
// import { MatSelectModule } from "@angular/material/select";
// import { MatNativeDateModule } from "@angular/material/core";

// @Component({
//   selector: "app-update",
//   standalone: true,
//   imports: [
//     MatNativeDateModule,
//     MatSelectModule,
//     CommonModule,
//     MatDatepickerModule,
//     MatIconModule,
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
//   templateUrl: "./update.component.html",
//   styleUrl: "./update.component.css",
// })
// export class UpdateComponent {
//   public constructor(  private _snackBar :MatSnackBar) {}


//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);
//   }

  

//   readonly dialogRef = inject(MatDialogRef<UpdateComponent>);
//   readonly data = inject<DialogData>(MAT_DIALOG_DATA);
//   readonly update = model(this.data.change);

//   onNoClick(): void {
//     this.dialogRef.close();
//     this.updatedChange = {...this.change}
//   }
  
//   public async send(){
//     try {
//       this.dialogRef.close(updatedchange);
//     } catch (error:any) {
//       console.log(error);
      
//       this.openSnackBar("Something went wrong", "X")
//     }
//   }
// }
