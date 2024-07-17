import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmpService } from '../services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emp: Employee={};
email?:string;
password?:string;
  constructor(private empobj: EmpService, private router: Router) {

  } 
 
  Validation():boolean{
    if(this.emp.name==""){
      alert("please enter name");
      return false;
    }
    else if(this.emp.email==""){
      alert("please enter emsil");
      return false;
    }
    else if(this.emp.password==""){
      alert("please enter password");
      return false;
    }
    else if(this.emp.gender==""){
      alert("please select gender");
      return false;
    }
    else if(this.emp.phonenumber==""){
      alert("please enter phonenumber");
      return false;
    }
    else if(this.emp.salary==0){
      alert("please enter saiary");
      return false;
    }
    else if(this.emp.address==""){
      alert("please enter address");
      return false;
    }
    else if(this.emp.deptNo==0){
      alert("please enter address");
      return false;
    }
    
    return true;
  }
  ngOnInit(): void {

    // if (this.emp.email&&this.emp.password) {
    //   // pass the email and password as the parameters for the GetEmployeeByEmpId method
    //   this.empobj.GetEmployeeByEmpId(this.emp.email,this.emp.password).subscribe(data=> {this.emp.email=data.email,this.emp.password=data.password} ,error => alert(error));
    // }
     if(window.sessionStorage.getItem("data")!=null){
       this.router.navigate(["profile"])
    }
   }

  login():void{
     debugger;
                   this.empobj.GetEmployeeByemailandpassword(this.email,this.password).subscribe((data)=> this.emp = data);
   
              //      if(this.emp === null || this.emp === undefined){      
              //       this.router.navigate(["register"]);
              //      }
              //  else{
              //       if(this.emp.active){
              //         window.sessionStorage.setItem("daata",this.emp.toString());
       
              //          this.router.navigate(["active"]);
              //       }else{
              //         window.sessionStorage.setItem("data",this.emp.toString());
              //         this.router.navigate(["home"]); // move to Activate component
              //       }
              //     }
  }
  Delete(empId:any):void{
      window.sessionStorage.setItem("employeeNumber",empId.toString());
      this.router.navigate(["delete"])
  }
  
}
