import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './Model/Employee';
import { EmpService } from './services/emp.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Emoployee';
  
  constructor(private dialogRef:MatDialog){
      }
     


     
}
