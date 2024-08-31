import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getDataWithHeaders(url: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(url, {
      observe: 'response', // Observe the full response, including headers
    });
  }
}
