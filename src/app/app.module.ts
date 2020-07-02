import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//router module for setting up the applicaion level route
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

//import BlogService FROM SERVICE
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogCreateComponent,
    NotFoundComponent,
    BlogViewComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //Router Module forRoot Method to declare the possible routes in application
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'create', component:BlogCreateComponent},
      {path:'**', component:NotFoundComponent},

    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }




//Y2NjZjVjNGZhZjlmNjMyZjc0MDc2ZmM3ODY2OTQ4MjBlYzZkMjU2MTM4M2ZjNzc4YmRjNjI2YmVhNWE2ZjM1Mjc5MzM2NGRjZDFiYjg3N2VjNzE5Y2FhM2Q0MzlkM2E1YmY2Nzk0NzM4ZGY0MDUwYmM1MmVmOTBhMjE3MmU2ZWRkNQ==