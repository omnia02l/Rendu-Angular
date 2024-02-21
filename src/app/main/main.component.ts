import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class HomeComponent {
 tab=["Angular","React","Vue"];
  Msg= "Salut from JS";
  path="../assets/logo1.png";
  
  changeMe(){
    this.path="../assets/logo2.png";
  }
}
