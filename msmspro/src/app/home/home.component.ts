import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmpService } from '../services/emp.service';
import { Router } from '@angular/router';
import { Department } from '../Model/Deparment';
import { DeptService } from '../services/dept.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  EmpList: Employee[]=[];
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tablesSizes:any=[5,10,15,20];
  DeptList?:Department[];
 
   constructor(private empObj:EmpService,private router:Router,private deptobj:DeptService){}
       ngOnInit():void{
         this.getList();
         this.deptobj.GetAlldepartments().subscribe(data=>this.DeptList=data,error=>alert(error))
         }
     getList():void{
       this.empObj.GetAllemployees(
         ).subscribe(data =>
  this.EmpList=data)
     }
    
     onTableDataCanges(event:any){
       this.page=event;
       this.getList();
     }
     onTableSizeChage(event:any){
       this.tableSize=event.target.value;
       this.page=1;
       this.getList();
     }
       Edit(empId:any):void{
         debugger;
 window.sessionStorage.setItem("empId",empId.toString());
 this.router.navigate(["edit"])
       }
       Delete(empId:any):void{
           window.sessionStorage.setItem("employeeNumber",empId.toString());
           this.router.navigate(["delete"])
       }
       
}
