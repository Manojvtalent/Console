import { Component } from '@angular/core';
import { IDpartment } from './Ideparment';
import { IEmployee } from './IEmployee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgIf';
  manoj:boolean=true;
  manoj1:boolean=true;
  manoj2:boolean;
  ToggelText:string;
  manoj3:boolean;
  color:string;

  Nos:number[];
  course:string[];
  ListDepts:IDpartment[];
  ListEmpts:IEmployee[];
constructor(){
  this.manoj2=true;
  this.ToggelText="ulike";
  this.manoj3=true;
  this.color="red";
  this.Nos=[1,2,3,4,4,5,6,677,3];
  this.course=[".net","java","sql"];
  this.ListDepts=[
    {detno:10,dname:"manger",locaton:"hyd"},
    {detno:20,dname:"hr",locaton:"hyd"},
    {detno:30,dname:"sales",locaton:"hyd"}
];
this.ListEmpts=[
  {empid:1001,ename:"manoj",email:"manojgoud@gmail.com",password:"12345",phoneno:"7892397965",gender:"male",salary:23000,Address:"hyd",deptno:10},
  {empid:1002,ename:"niharika",email:"niharika@gmail.com",password:"123455667",phoneno:"7892379695",gender:"Female",salary:26000,Address:"hyd",deptno:20},
  {empid:1003,ename:"siri",email:"siri@gmail.com",password:"0765444",phoneno:"7892397695",gender:"Female",salary:27000,Address:"hyd",deptno:40},
  {empid:1004,ename:"kittu",email:"kittu@gmail.com",password:"5456",phoneno:"8972397695",gender:"male",salary:28000,Address:"hyd",deptno:60},
  {empid:1005,ename:"tharun",email:"tharn@gmail.com",password:"4456666",phoneno:"9872397695",gender:"male",salary:29000,Address:"hyd",deptno:70},
  {empid:1006,ename:"ghost",email:"ghost@gmail.com",password:"4443333",phoneno:"9858833608",gender:"Female",salary:230000,Address:"hyd",deptno:70}


]


}
btnToggelClick(){
  if(this.manoj2==true){
    this.manoj2=false;
  }else{
    this.manoj2=true;
  }
}
btnLikeToggelClick(){
  if(this.manoj3==true){
    this.manoj3=false;
    this.ToggelText="unlike";
  }else{
    this.manoj3=true;
    this.ToggelText="Like";
  }
}
ddlColorSelect(event:any):void{
  this.color=event.target.value;
}
}