import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Operations';
  name:string= "hai" ;
  btn_click():void{
    alert("Button clicked successfully...!");
  }
  btn_Db1_click():void{
    alert("Button Double clicked successfully...!");
    
  }
  Div_click():void{
    alert("Div Clicked sucessfully...!");
  }
  ddl_SelectChange(event:any):void{
    alert("Dropdown item "+event.target.value+"selected successfully");
  }

  a?:string;
  b?:string;
  res?:number;
  Displayressult?:string;
validation(): boolean{
if(this.a! ==""||this.a! ==undefined){
  alert("Please enter a value..!");
  return false;
}
else if(isNaN(parseInt(this.a!))){
  alert("Please enter a value as only digits..! ");
  return false;
}
if(this.b! ==""||this.b! ==undefined){
  alert("Please enter b value..!");
  return false;
}
else if(isNaN(parseInt(this.b!))){
  alert("Please enter b value as only digits..! "); 
  return false;
}
return true;
}

  Add():void{
    if(this.validation()){
  this.res=parseInt(this.a!)+parseInt(this.b!);
  this.Displayressult="The Add is : "+this.res;
    }
  }
  Sub():void{
    if(this.validation()){
    this.res=parseInt(this.a!)-parseInt(this.b!);
    this.Displayressult="The sub is : "+this.res;
    }
    }
    mul():void{
      if(this.validation()){
      this.res=parseInt(this.a!)*parseInt(this.b!);
      this.Displayressult="The mul is : "+this.res;
      }
      }
      div():void{
        if(this.validation()){
        this.res=parseInt(this.a!)/parseInt(this.b!);
        this.Displayressult="The Div is : "+this.res;
        }
        }   
        rem():void{
          if(this.validation()){
          this.res=parseInt(this.a!)%parseInt(this.b!);
          this.Displayressult="The rem is : "+this.res;
          }
       }
}
