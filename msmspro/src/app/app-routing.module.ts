import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ManageOtherProfilesComponent } from './manage-other-profiles/manage-other-profiles.component';
import { ActiveComponent } from './active/active.component';


const routes: Routes = [
 {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"manage", component:ManageOtherProfilesComponent},
  { path:"profile",component:ProfileComponent},
  {path:"edit",component:EditComponent},
  {path:"home",component:HomeComponent},
  {path:"active",component:ActiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
