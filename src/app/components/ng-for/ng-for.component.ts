import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Tunis", "Sousse", "Douz", "Bizerte", "Nabeul"];

  employeeArray : any[] = [
    {empId:121, name: 'AAA', city: "Tunis", contactNo: '11111111'},
    {empId:122, name: 'BBB', city: "Douz", contactNo: '22222222'},
    {empId:123, name: 'CCC', city: "Tunis", contactNo: '33333333'},
    {empId:124, name: 'DDD', city: "Sousse", contactNo: '44444444'},
    {empId:125, name: 'EEE', city: "Nabeul", contactNo: '55555555'}
  ]

}
