import { Component } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Department } from '../Models/Department';
import { EmpService } from '../srvices/emp.service';
import { Router } from '@angular/router';
import { DeptService } from '../srvices/dept.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emp:Employee;
  DeptList?:Department[];
  
  constructor( private empobj:EmpService,private deptobj:DeptService,
    private router:Router){
    
      this.emp={}
    
     }
    
     
    Validation():boolean{
//       if(this.emp.name==""){
//         alert("please enter name");
//         return false;
//       }
//       else if(this.emp.active=undefined){
//         alert("please select one the below")
// return false;
//       }
//       else if(this.emp.email==""){
//         alert("please enter emsil");
//         return false;
//       }
//       else if(this.emp.password==""){
//         alert("please enter password");
//         return false;
//       }
//       else if(this.emp.gender==""){
//         alert("please select gender");
//         return false;
//       }
//       else if(this.emp.phonenumber==""){
//         alert("please enter phonenumber");
//         return false;
//       }
//       else if(this.emp.salary==0){
//         alert("please enter saiary");
//         return false;
//       }
//       else if(this.emp.address==""){
//         alert("please enter address");
//         return false;
//       }
//       else if(this.emp.deptNo==0){
//         alert("please enter address");
//         return false;
//       }
      
       return true;
   }
    ngOnInit():void{
      this.deptobj.GetAlldepartments().subscribe(data=>this.DeptList=data,error=>alert(error));

  }

    btnRegister():void{
debugger;
   
      if (this.Validation()){
    // this.emp.empId=parseInt(this.emp.empId!.toString())
    // this.emp.salary= parseInt(this.emp.salary!.toString());
    // this.emp.active=JSON.parse("true")
    this.empobj.InsertEmployee(this.emp).subscribe(data=>alert(data + "Record update Successfully...!"),error=>alert(error));
    this.router.navigate(["home"]).then(() =>{
      window.location.reload();
});
      }
  
        
   
  }
}
