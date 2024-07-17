import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FricingComponent } from './fricing/fricing.component';
import { FaqComponent } from './faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './blog/blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FordComponent } from './ford/ford.component';
import { FordoverviewComponent } from './fordoverview/fordoverview.component';
import { FordItemComponent } from './ford-item/ford-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FricingComponent,
    FaqComponent,
    PagenotfoundComponent,
    BlogComponent,
    BlogHomeComponent,
    BlogPostComponent,
    FordComponent,
    FordoverviewComponent,
    FordItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
