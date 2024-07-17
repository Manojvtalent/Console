import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FricingComponent } from './fricing/fricing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './blog/blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FordComponent } from './ford/ford.component';
import { FordoverviewComponent } from './fordoverview/fordoverview.component';
import { FordItemComponent } from './ford-item/ford-item.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"faq",component:FaqComponent},
  {path:"fricing",component:FricingComponent},
  {path:"blog",component:BlogComponent, 
children:[
  {path:"",redirectTo:"bloghome",pathMatch:"full"},
{path:"bloghome",component:BlogHomeComponent},
{path:"blogpost",component:BlogPostComponent}
]
},
{path:"ford",component:FordComponent,
children:[
  {path:"",redirectTo:"fordoverriew",pathMatch:"full"},
  {path:"fordoverview",component:FordoverviewComponent},
  {path:"forditem",component:FordItemComponent}
]
},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
