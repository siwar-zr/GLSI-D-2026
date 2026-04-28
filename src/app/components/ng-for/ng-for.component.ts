import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName: string = "Angular";

  studentObj: any = {
    name: 'John',
    city: 'NYC',
    mobile: '1122334455'
  }

  currentDate: Date = new Date();

  cityList: string[] = ["Tunis", "Sousse", "Douz", "Bizerte", "Nabeul"];

  employeeArray : any[] = [
    {empId:121, name: '', city: "Tunis", contactNo: '11111111', attendance: 40},
    {empId:122, name: 'BBB', city: "Douz", contactNo: '22222222', attendance: 50},
    {empId:123, name: null, city: "Tunis", contactNo: '33333333', attendance: 80},
    {empId:124, name: 'DDD', city: "Sousse", contactNo: '44444444', attendance: 100},
    {empId:125, city: "Nabeul", contactNo: '55555555', attendance: 65}
  ]

}
