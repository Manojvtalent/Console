import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmpService } from '../services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  emp:Employee;
  constructor( private empobj:EmpService,
    private router:Router){
      this.emp={employeeNumber:0,lastame:"",firstName:"",gender:"",emailAddress:"",dateofBirth:0,password:"",address:""};
     }
  ngOnInit(): void {
    
    this.empobj.GetEmployeeByEmpId(parseInt(window.sessionStorage.getItem("employeeNumber")!)).subscribe(data=>this.emp = data,error => alert(error));
  }
  Validation():boolean{
    if(this.emp.firstName==""){
      alert("please enter fname");
      return false;
    }
    else if(this.emp.lastame==""){
      alert("please enter lname");
      return false;
    }
    else if(this.emp.dateofBirth==0){
      alert("please enter dateofBirth");
      return false;
    }
    else if(this.emp.gender==""){
      alert("please select gender");
      return false;
    }
    else if(this.emp.emailAddress==""){
      alert("please enter emailAddress");
      return false;
    }
    else if(this.emp.password==""){
      alert("please enter password");
      return false;
    }
    else if(this.emp.phoneNumber==""){
      alert("please enter phoneNumber");
      return false;
    }
    else if(this.emp.address==""){
      alert("please enter address");
      return false;
    }
    
    return true;
  }
  
  btnEditClicked(){
debugger;
    if (this.Validation()){
      this.emp.employeeNumber=parseInt(this.emp.employeeNumber!.toString())
    this.emp.dateofBirth= parseInt(this.emp.dateofBirth!.toString());
    this.empobj.upadeteEmployee(this.emp).subscribe(data=>alert(data + "Record update Successfully...!"),error=>alert(error));
    this.router.navigate(["home"]).then(() =>{
      window.location.reload();
});

  }
  
   
  }
  
  btnCancilClicked(){
    this.router.navigate(["home"])
  }

}
