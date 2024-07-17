import { Component, booleanAttribute } from '@angular/core';
import { Employee } from '../Model/Employee';
import { Department } from '../Model/Deparment';
import { EmpService } from '../services/emp.service';
import { DeptService } from '../services/dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
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
      this.deptobj.GetAlldepartments().subscribe(data=>this.DeptList=data,error=>alert(error));

      this.empobj.GetEmployeeByid(parseInt(window.sessionStorage.getItem("empId")!)).subscribe(data=>this.emp = data,error => alert(error));

    }
  
    btnEditClicked(){
      debugger;
      
         
            this.emp.empId=parseInt(this.emp.empId!.toString())
          this.emp.salary= parseInt(this.emp.salary!.toString());
          this.emp.active=(this.emp.active!.toString()=="true")
          this.empobj.upadeteEmployee(this.emp).subscribe(data=>alert(data + "Record update Successfully...!"),error=>alert(error));
          this.router.navigate(["home"]).then(() =>{
            window.location.reload();
      });
      
         
        }
        btnDeleteClicked(){

          if (this.Validation()){
            this.emp.empId=parseInt(this.emp.empId!.toString());
          this.empobj.DeleteEmployee(this.emp.empId).subscribe(data=>alert(data + "Record delete Successfully...!"),error=>alert(error));
          this.router.navigate(["home"]).then(() =>{
            window.location.reload();
      });
          
    }
  }  
        
        btnCancilClicked(){
          this.router.navigate(["home"])
        }
      }


