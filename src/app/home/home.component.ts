import { BlogService } from './../blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs=[];

  constructor(public blogHttpService: BlogHttpService) {

    console.log("Home component service called");

   }

  ngOnInit() {

    console.log("Home component onInit called");
    this.allBlogs= this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log('logged in');
        console.log(data);
        this.allBlogs=data["data"];
        console.log(this.allBlogs);
      },

      error => {
        console.log("Error..!!");
        console.log(error.errorMessage);
      }
    );

  }

  ngOnDestroy() {

    console.log("Home component onDestroy called");

  }

}
