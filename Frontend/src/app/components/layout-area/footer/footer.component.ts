import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  copyEmailToClipboard(){
const text = "shlomtzosh@gmail.com";
navigator.clipboard.writeText(text).then(()=>{
  alert("Email copied to clipboard.")
}).catch((err)=>{
  console.log('Error copying email:', err);
  
})
  }

  copyPhoneNumToClipboard(){
    const text = "058-4142169";
    navigator.clipboard.writeText(text).then(()=>{
      alert("Phone number copied to clipboard.")
    }).catch((err)=>{
      console.log('Error copying phone number:', err);
      
    })
      }
}
