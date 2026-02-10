import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Siwar";
  deNo: number = 122;
  isActive: boolean = true;
  currentDate : Date = new Date();
  myPlaceholder : string = "Enter your name";
  divClass : string = "bg-primary";
  selectedCity : string = "";

  constructor() {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
    //this.showWelcome();
  }

  showWelcome(){
    alert("Welcome to our Class !");
  }

  onCityChange(){
    console.log("City changed !")
  }

}
