import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import  jsonUrl from '../../app/home/home-data.json'
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {}

  getSections(): Observable<any> {
    return of({sections: jsonUrl.sections,
      images: jsonUrl.images});
  }}
