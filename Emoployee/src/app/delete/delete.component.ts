import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmpService } from '../services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  emp:Employee;
  constructor( private empobj:EmpService,
    private router:Router){
      this.emp={employeeNumber:0,lastame:"",firstName:"",gender:"",emailAddress:"",dateofBirth:0,password:"",address:""};
     }
  ngOnInit(): void {
    this.empobj.GetEmployeeByEmpId(parseInt(window.sessionStorage.getItem("employeeNumber")!)).subscribe(data=> this.emp = data,error => alert(error));
  }
  validation():boolean{
    if(this.emp.firstName==""){
      alert("please enter firstName..!")
      return false;
    }
  
    if(this.emp.address==""){
      alert("please enter address..!")
      return false;
    }
    return true;
  }
  
  btnDeleteClicked(){

    if (this.validation()){
      this.emp.employeeNumber=parseInt(this.emp.employeeNumber!.toString());
    this.empobj.DeleteEmployee(this.emp.employeeNumber).subscribe(data=>alert(data + "Record delete Successfully...!"),error=>alert(error));
    this.router.navigate(["home"]).then(() =>{
      window.location.reload();
});

  }
  
   
  }
  
  btnCancilClicked(){
    this.router.navigate(["home"])
  }

}
