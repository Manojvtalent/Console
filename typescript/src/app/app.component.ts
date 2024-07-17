import { Component } from '@angular/core';
import { IDepartment } from './Models/IDepatment';
import { iEmployee } from './Models/IEmployee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript';

  no?:number[];
  names?:any[];

  dept1:IDepartment={};
  dept2:IDepartment={};
  Emp1:iEmployee={};

  constructor(){
    this.names=[1,"maoj",1077.5,true];
    this.no=[12,23,3,4,44,];
    
    this.dept1={deptno:10,dname:"manager",location:"hyd"};
    this.dept2={deptno:20,dname:"hr",location:"kmr"}
    this.Emp1={EmpId:1001,Ename:"manoj",gender:"male",Email:"manojgoudj7@gmail.com",phone:"9848833698",password:"manojgoud",address:"kys",salary:230000,deptno:10}
  }

  evenorodd(n:number):string{
      let res:string="";
      if(n%2==0){
        res="even";
      }else{
        res="odd";
      }
      return res;
  }
  operations(a:number,b:number,opt:string):number{
    let res :number=0;
    switch(opt){
      case "+":{res=a+b;break;}
      case "-":{res=a-b;break;}
      case "*":{res=a*b;break;}
      case "/":{res=a/b;break;}
      case "%":{res=a%b;break;}
      default:{res=0;alert("Invaild choice..!"); break;}

    }
    return res;
  }
  prime(n:number):string{
    let res:string="";
    let i:number=1;
    let count=0;
    while(i<=n){
      if(n%i==0){
        count++;
      }
      i++;
    }
    if(count==2){
      res="prime"
    }else{
      res="not prime"
    }
    return res;
  }
  armstrong(n:number):string{
    let res:string="not armstrong";
   let temp:number;
   temp=n;
  let rem:number=0;
  let arm:number=0;
    while(n!=0){
      rem=n%10;
      arm=arm+(rem*rem*rem);
      n=n/10;
    }
    if(temp==arm){
    
      res="armstrong";
    }
    return res;
  }
}
