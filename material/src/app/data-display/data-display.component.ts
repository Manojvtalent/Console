import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  data: any;
  headers?: HttpHeaders;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDataWithHeaders('https://api.example.com/data').subscribe((response: HttpResponse<any>) => {
      this.data = response.body;
      this.headers = response.headers;
    });
}     
}
