import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/Department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
  public APibasicURL:string="";
  GetAlldepartments():Observable<Department[]>{
    return this.http.get<Department[]>("http://localhost:37146/api/Dept/GetAll");
  }
    constructor(private http:HttpClient) { }
  
}
