import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { Department } from '../Model/Deparment';
import { EmpService } from '../services/emp.service';
import { DeptService } from '../services/dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {
  emp:Employee;
  DeptList?:Department[];

  constructor( private empobj:EmpService,private deptobj:DeptService,
    private router:Router){
    
      this.emp={empId:0,name:"",gender:"",email:"",phonenumber:"",password:"",salary:0,address:"",deptNo:0};
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

    ngOnInit():void{
      debugger;
      // if(window.sessionStorage.getItem("data")==null){
      //   this.router.navigate(["login"]).then(()=>{
      //     window.location.reload();
      //   });
      // }
      //  else{
      //   window.sessionStorage.getItem("daata");

      // }
      this.deptobj.GetAlldepartments().subscribe(data=>this.DeptList=data,error=>alert(error));
      
       this.empobj.GetEmployeeByemailandpassword(window.sessionStorage.getItem("email")!, window.sessionStorage.getItem("password")!).subscribe(data=> this.emp = data,error => alert(error));
       if(this.emp == null || this.emp == undefined){      
                this.router.navigate(["register"]);
              }
         else{
              //  if(this.emp.active){ s
                  window.sessionStorage.setItem("data",this.emp.toString());
                // this.empobj.GetEmployeeByemailandpassword(email,password).subscribe(data=> this.emp = data,error => alert(error));
  
                  this.router.navigate(["profile"]);
                // }else{
              //    window.sessionStorage.setItem("data",this.emp.toString());
              //     this.router.navigate(["home"]); // move to Activate component
              //  }
              }
      // this.empobj.GetEmployeeByEmpId(window.sessionStorage.getItem("emailandpassword")!.split(",")).subscribe(data=> this.emp = data,error => alert(error));
      // this.empobj.GetEmployeeByEmpId(window.sessionStorage.getItem("emailandpassword")!.split(",")as const).subscribe(data=> this.emp = data,error => alert(error));
      // if(window.sessionStorage.getItem("data")==null){
      //   this.router.navigate(["login"]).then(()=>{
      //     window.location.reload();
      //   });
      // }
      // else{
      //     window.sessionStorage.getItem("data");
  
      //   }
    }
   btn_Active(){
    window.sessionStorage.clear();
    this.router.navigate(["login"])

   } 
  
}
