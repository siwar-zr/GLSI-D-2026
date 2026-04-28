import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit,AfterViewInit {

  http = inject(HttpClient);
  firstname : string;
  currentTab: string = "";
  carList: any[] = [];
  carObj : any = {
  "carId": 0,
  "brand": "",
  "model": "",
  "year": "",
  "color": "",
  "dailyRate": "",
  "carImage": "",
  "regNo": ""
  }

  constructor(){
    this.firstname = '';
  }

  ngOnInit(): void {
    this.getAllCars()
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit ",performance.now())
  }

  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
      this.carList = res.data;
    })
  }

  onSaveCar(){
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Car created successfully !");
        this.getAllCars();
      }else{
        alert(res.message);
      }
    })
  }

  onEdit(data : any){
    this.carObj = data;
  }

  updateCar(){
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any) => {
      if(res.result){
        alert("Car updated successfully !");
        this.getAllCars();
      }else{
        alert(res.message);
      }
    })
  }

  onDelete(id: number){
    const isDeleted = confirm("Are you sure you want to delete this car ?");
    debugger;
    if(isDeleted == true){
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid="+id).subscribe((res:any)=>{
      if(res.result){
        alert("Car Deleted Successfully");
        this.getAllCars();
      }else{
        alert(res.message);
      }
    })
    }
  }

  onTabChange(tabName: string){
    this.currentTab = tabName
  }

}
