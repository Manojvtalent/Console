import { Component } from '@angular/core';
import { IEmployee } from './models/IEmpoyee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipespro';
  title1:string="hello all ";
  pi: number = 3.14159265359;
  a: number = 240000;
  b: number = 110000;
  c: number = 0.259;
  d: number = 1.3495;
  todayDate:Date = new Date();
  ListEmpts:IEmployee[];
  constructor(){
    this.ListEmpts=[
      {empid:1001,ename:"manoj",email:"manojgoud@gmail.com",password:"12345",phoneno:"7892397965",gender:"male",salary:23000,Address:"hyd",deptno:10},
      {empid:1002,ename:"niharika",email:"niharika@gmail.com",password:"123455667",phoneno:"7892379695",gender:"Female",salary:26000,Address:"hyd",deptno:20},
      {empid:1003,ename:"siri",email:"siri@gmail.com",password:"0765444",phoneno:"7892397695",gender:"Female",salary:27000,Address:"hyd",deptno:40},
      {empid:1004,ename:"kittu",email:"kittu@gmail.com",password:"5456",phoneno:"8972397695",gender:"male",salary:28000,Address:"hyd",deptno:60},
      {empid:1005,ename:"tharun",email:"tharn@gmail.com",password:"4456666",phoneno:"9872397695",gender:"male",salary:29000,Address:"hyd",deptno:70},
      {empid:1006,ename:"ghost",email:"ghost@gmail.com",password:"4443333",phoneno:"9858833608",gender:"Female",salary:230000,Address:"hyd",deptno:70}
    ]    
  }
}
