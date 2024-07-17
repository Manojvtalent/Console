import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  APIBasicURL="http://localhost:36485/api/EmpWebAPI/";
// APIBasicURL="http://192.168.127.3:2021/api/EmpWebAPI/";

 public  httpOptions = {
  headers :new HttpHeaders({
    'Content-Type': 'application/json'
  })
 }


  constructor(private http:HttpClient) {}
    GetAllemployees():Observable<Employee[]>{
      debugger;
      return this.http.get<Employee[]>(this.APIBasicURL+"GetAll");
   }
   GetEmployeeByEmpId(employeeNumber:number):Observable<Employee>{
    return this.http.get<Employee>(this.APIBasicURL+"GetEmployeeByEmpId?EmployeeNumber="+employeeNumber).pipe(catchError(this.httpErrorHandler));
   }
   

  InsertEmployee(emp:Employee):Observable<string>{
         
    return this.http.post<string>(this.APIBasicURL+"InsertEmployees",emp , this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  upadeteEmployee(emp:Employee):Observable<string>{
    debugger;
         
    return this.http.put<string>(this.APIBasicURL+"UpdateEmployee",emp , this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  DeleteEmployee(employeeNumber:number):Observable<string>{
    debugger;
         
  return this.http.delete<string>(this.APIBasicURL+"DeleteEmployee?EmployeeNumber="+employeeNumber, this.httpOptions)
                          .pipe(catchError(this.httpErrorHandler));
  }
  
  
  httpErrorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
  
  
  

}
