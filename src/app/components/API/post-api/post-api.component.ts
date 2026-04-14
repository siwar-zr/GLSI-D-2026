import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  http = inject(HttpClient);
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

}
