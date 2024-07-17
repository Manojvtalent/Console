import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmpService } from './services/emp.service';
import { DeptService } from './services/dept.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ManageOtherProfilesComponent } from './manage-other-profiles/manage-other-profiles.component';
import { ActiveComponent } from './active/active.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ManageOtherProfilesComponent,
    ActiveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    EmpService,
    DeptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
