import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmpService } from '../services/emp.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AgGridEvent, ColDef, ColumnApi, GridApi, GridOptions, IGetRowsParams, ILoadingCellRendererParams } from 'ag-grid-community';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  EmpList: Employee[]=[];
  // emp!: Employee;
 page:number=1;
 count:number=0;
 tableSize:number=5;
 tablesSizes:any=[5,10,15,20]
    phonenumber:string="";

  constructor(private empObj:EmpService,private router:Router){}
      ngOnInit():void{
        this.getList();
        // this.emp={lastame:"",firstName:"",gender:"",emailAddress:"",dateofBirth:0,phoneNumber:"",password:"",address:""};
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
  
    onNumber(phoneNumber:string): string {
      debugger;
      let mask = "";
      if (phoneNumber) {
          for (let i = 1; i <=phoneNumber.length-4; i++) {
              mask += "*";
          }
          return mask + phoneNumber.slice(6,10);
      }
      else{
      // If phoneNumber is not available, you can handle it here (e.g., return an error message).
      return "Phone number not provided.";
      }
  }
    
    onTableSizeChage(event:any){
      this.tableSize=event.target.value;
      this.page=1;
      this.getList();
    }
      Edit(employeeNumber:any):void{
        debugger;
window.sessionStorage.setItem("employeeNumber",employeeNumber.toString());
this.router.navigate(["edit"])
      }
      Delete(employeeNumber:any):void{
          window.sessionStorage.setItem("employeeNumber",employeeNumber.toString());
          this.router.navigate(["delete"])
      }
  
     
 

}
