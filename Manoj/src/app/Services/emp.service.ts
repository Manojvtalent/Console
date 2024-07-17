import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

 
 
 
 
  APIBasicURL="http://localhost:34968/api/EmpWebApi/";
 public  httpOptions = {
  headers :new HttpHeaders({
    'Content-Type': 'application/json'
    

  })
 }
 
  constructor(private http:HttpClient) {}


  GetAllemployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:37146/api/Emp/GetAll");
 }

InsertEmployee(emp:Employee):Observable<string>{
  
  return this.http.post<string>("http://localhost:37146/api/Emp/InsertEmployees",emp , this.httpOptions)
                        .pipe(catchError(this.httpErrorHandler));
}

  
UpdateEmployee(emp:Employee):Observable<string>{

  return this.http.put<string>("http://localhost:34968/api/EmpWebApi/UpdateEmployees",emp , this.httpOptions)
                        .pipe(catchError(this.httpErrorHandler));
}   

DeleteEmployee(empid:any):Observable<string>{
  debugger;
  return this.http.delete<string>("http://localhost:34968/api/EmpWebApi/DeleteEmployee?empid="+empid , this.httpOptions)
                        .pipe(catchError(this.httpErrorHandler));
}

  
GetEmployeeByEmpId(empid:any):Observable<Employee>{
  debugger;
  return this.http.get<Employee>(this.APIBasicURL+"GetEmployeeByEmpId?EmpID="+empid)
                        .pipe(catchError(this.httpErrorHandler));
}

getEmployeestatus(email:any):Observable<Employee>{
  return this.http.get<Employee>(this.APIBasicURL+"GetemployeebyemailReturnsbool?email="+email)
                       .pipe(catchError(this.httpErrorHandler));
}

getEmployeebyEmailandpassword(email:any,password:any):Observable<Employee>{
  return this.http.get<Employee>(this.APIBasicURL+ "GetEmployeebyemailandpassword?email="+email+ "&password=" + password)
                      .pipe(catchError(this.httpErrorHandler));
}

httpErrorHandler(error:HttpErrorResponse){
  return throwError(error.message || "Server Error")
}
}
