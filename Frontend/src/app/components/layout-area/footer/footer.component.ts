import { Component } from "@angular/core";
import { SnackBarServices } from "../../../services/snackBar.service";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
constructor(private snackBarServices : SnackBarServices){}

  copyEmailToClipboard() {
    const text = "shlomtzosh@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
     this.snackBarServices.openSnackBar("Copied email.","x");
      })
      .catch(err => {
        console.log("Error copying email:", err);
        this.snackBarServices.openSnackBar("Error copying email", "x");
      });
  }

  copyPhoneNumToClipboard() {
    const text = "058-4142169";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.snackBarServices.openSnackBar("Copied phone number.", "x");
      })
      .catch(err => {
        console.log("Error copying phone number:", err);
        this.snackBarServices.openSnackBar("Error copying phone number:", "x");
      });
  }
}
