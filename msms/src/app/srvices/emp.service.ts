import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  ApiBasicURL="http://localhost:37146/api/Emp/";
  apiBasicURL="http://localhost:21142/api/UserwebApi/GetUsers";
public  httpOptions = {
  headers : new HttpHeaders({
    'content-Type':'application/json'
  })
 }
  constructor(private http:HttpClient) {}
  InsertEmployee(emp:Employee):Observable<string>{
    debugger;
    return this.http.post<string>("http://localhost:37146/api/Emp/InsertEmployees",emp, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  }
    GetAllemployees():Observable<Employee[]>{
      debugger;
      return this.http.get<Employee[]>(this.apiBasicURL).pipe(catchError(this.httpErrorHandler));
   }
   GetEmployeeByEmpId(email:string,password:string):Observable<Employee>{
    debugger
    return this.http.get<Employee>(this.ApiBasicURL+"GetEmployeeByemailIdandpassword?email="+email+"&password="+password).pipe(catchError(this.httpErrorHandler));
   }
   GetEmployeeByid(empid:number):Observable<Employee>{
    debugger
    return this.http.get<Employee>(this.ApiBasicURL+"GetEmployeeByempId?empId="+empid).pipe(catchError(this.httpErrorHandler));
   }

   
  upadeteEmployee(emp:Employee):Observable<string>{
    debugger;
         
    return this.http.put<string>(this.ApiBasicURL+"UpdateEmployee",emp, this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  DeleteEmployee(empId:number):Observable<string>{
    debugger;
         
  return this.http.delete<string>(this.ApiBasicURL+"DeleteEmployee?EmployeeNumber="+empId, this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  
  
  httpErrorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
