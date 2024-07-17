import { Component } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmpService } from '../srvices/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emp: Employee;

  constructor(private empobj: EmpService, private router: Router) {
    this.emp = { email: "", password: "" }
  } 
  Validation(): boolean {
    if (this.emp.email =="") {
      alert("please enter email");
      return false;
    }
    else if (this.emp.password == "") {
      alert("please enter password");
      return false;
    }
    return true;
  }
  ngOnInit(): void {

    // if (this.emp.email&&this.emp.password) {
    //   // pass the email and password as the parameters for the GetEmployeeByEmpId method
    //   this.empobj.GetEmployeeByEmpId(this.emp.email,this.emp.password).subscribe(data=> {this.emp.email=data.email,this.emp.password=data.password} ,error => alert(error));
    // }
  }

  login(email:any,password:any):void{
    debugger
    
    window.sessionStorage.setItem("email", email);
    window.sessionStorage.setItem("password", password);
    email + password;

this.router.navigate(["profile"])
  }
  Delete(empId:any):void{
      window.sessionStorage.setItem("employeeNumber",empId.toString());
      this.router.navigate(["delete"])
  }
}
