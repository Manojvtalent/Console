import { Component } from '@angular/core';
import { EmpService } from '../Services/emp.service';
import { DeptService } from '../Services/dept.service';
import { Router } from '@angular/router';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  EmpList:Employee[]=[];
  page:number=1;
  count:number=0;
  Tablesize:number=4;
 //TableSize:any=[5,10,20]



constructor(private empObj:EmpService, private deptobj:DeptService,private router:Router){}

ngOnInit():void{
  this.get();
}


get():void{
  this.empObj.GetAllemployees().subscribe(data=>this.EmpList = data ,error => alert(error));

}

ngtableChange(event:any){
  this.page=event;
  this.get();
}

ngTableSize(event:any):void{
this.page=1
//this.TableSize=event.target.value
this.get();
}

btnEdit(empid:any):void{
//alert("button clicked")

window.sessionStorage.setItem("EmpId",empid.toString());
this.router.navigate(["update"]);
}

// btnDelete(empid:any):void{
//   //alert("button clicked ")
//  window.sessionStorage.setItem("empid",empid.toString());
// this.router.navigate(["update"]);
// } 
btnStatus(email:any):void{
  window.sessionStorage.setItem("emil",email.toString());
  this.router.navigate(["update"]);
}
  
}
