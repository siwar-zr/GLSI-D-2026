import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  constructor(private http : HttpClient) { }

  loadCustomers(){
    debugger;
    return this.http.get(this.apiUrl+"GetCustomers");
  }
}
