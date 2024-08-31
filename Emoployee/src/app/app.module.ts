import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import{MatCardModule}from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpService } from './services/emp.service';
import { Router, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPaginationModule } from 'ngx-pagination';

import{MatButtonModule}from '@angular/material/button'

console.log('AgGridModule', AgGridModule);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AgGridModule,
    NgxPaginationModule,
    MatButtonModule

  ],
  providers: [EmpService],
  bootstrap: [AppComponent],
  exports :[ ]
})
export class AppModule { }
