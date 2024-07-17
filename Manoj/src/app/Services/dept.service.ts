import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/Department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  public APIBasicURL: string ="http://192.168.0.139:5050/api/DeptWebAPI/";

  GetAlldepartments():Observable<Department[]>{
   return this.http.get<Department[]>("http://localhost:37146/api/Dept/GetAll"); 
  }
  constructor(private http:HttpClient) {  }
}
