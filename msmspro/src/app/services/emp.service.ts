import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from '../Model/Employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EditComponent } from '../edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  APIBasicURL="http://localhost:37146/api/Emp/";
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
    GetEmployeeByemailandpassword(email:any,password:any):Observable<Employee>{
    debugger
    return this.http.get<Employee>("http://localhost:37146/api/Emp/GetEmployeeByemailIdandpassword?email="+email+"&password="+password).pipe(catchError(this.httpErrorHandler));
   }
   GetEmployeeByid(empid:number):Observable<Employee>{
    debugger
    return this.http.get<Employee>("http://localhost:37146/api/Emp/GetEmployeeByempId?empId="+empid).pipe(catchError(this.httpErrorHandler));
   }
// isloggedin(){
//   return localStorage.getItem('token')!=null;
// }
   
  upadeteEmployee(emp:Employee):Observable<string>{
    debugger;
         
    return this.http.put<string>("http://localhost:37146/api/Emp/UpdateEmployee",emp, this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  DeleteEmployee(empId:number):Observable<string>{
    debugger;
         
  return this.http.delete<string>("http://localhost:37146/api/Emp/DeleteEmployee?EmpId="+empId, this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  
  
  httpErrorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
