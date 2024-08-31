import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../my/json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections:any;
  currentId:any[]=[];
  images:any=[];
  visibleSections: any[] = [];
  startIndex: number = 0;
  visibleImages: any[] = [];
  readonly PAGE_SIZE: number = 2;
  constructor(private http:HttpClient,private sirvce:JsonService,private route:ActivatedRoute){}
  ngOnInit(): void {
    debugger
    this.sirvce.getSections().subscribe(data=>{
      this.currentId=data.sections;
      this.images=data.images;
      this.updateVisibleSections();
      this.updateVisibleImages();
    })
  }
  updateVisibleSections() {
    this.visibleSections = this.currentId.slice(this.startIndex, this.startIndex + this.PAGE_SIZE);
    console.log('Visible sections:', this.visibleSections);
  }
  updateVisibleImages() {
    this.visibleImages = this.images.slice(this.startIndex, this.startIndex + 2);
  }

  next() {
    debugger;
    if (this.images && this.images.length && this.startIndex + this.PAGE_SIZE < this.images.length) {
      this.startIndex += 1;
      this.updateVisibleSections();
      this.updateVisibleImages();
    }
  }

  previous() {
    if (this.startIndex > 0) {
      this.startIndex -= 1; 
      this.updateVisibleSections();
      this.updateVisibleImages();
    }
  }
}
