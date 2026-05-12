import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    username:'',
    password:''
  }

  apiLoginObj: any = {
  "EmailId": "",
  "Password": ""
}

  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    //if(this.loginObj.username == 'admin' && this.loginObj.password == "1234"){
    //  this.router.navigateByUrl("admin");
    //}else{
    //  alert("Wrong Credentials")
    //}
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=>{
      debugger;
      localStorage.setItem("angularUser",res.data.userId)
      this.router.navigateByUrl("admin");
    }, error =>{
      alert("Wrong Credentials");
    })
  }

}
