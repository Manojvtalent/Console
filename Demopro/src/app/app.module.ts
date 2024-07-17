import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleAComponent } from './sample-a/sample-a.component';
import { SampleBComponent } from './sample-b/sample-b.component';
import { Test1Module } from './test1/test1.module';
import { Demo1Module } from './test1/demo1/demo1.module';
import { DemoComponent } from './test1/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleAComponent,
    SampleBComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   Test1Module,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
