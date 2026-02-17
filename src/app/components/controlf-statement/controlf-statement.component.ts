import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlf-statement',
  imports: [FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './controlf-statement.component.html',
  styleUrl: './controlf-statement.component.css'
})
export class ControlfStatementComponent {

  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';
  modesOfTransport: string = '';
  cityList: string[] = [
    "Tunis", 
    "Sousse", 
    "Douz", 
    "Bizerte", 
    "Nabeul"
  ];

  employeeArray : any[] = [
    {empId:121, name: 'AAA', city: "Tunis", contactNo: '11111111'},
    {empId:122, name: 'BBB', city: "Douz", contactNo: '22222222'},
    {empId:123, name: 'CCC', city: "Tunis", contactNo: '33333333'},
    {empId:124, name: 'DDD', city: "Sousse", contactNo: '44444444'},
    {empId:125, name: 'EEE', city: "Nabeul", contactNo: '55555555'}
  ]

  hideShowDiv(isShow: boolean){
    this.div1Visible = isShow;
  }
}
