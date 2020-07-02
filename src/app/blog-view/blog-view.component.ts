import { Component, OnInit } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { NotificationService } from '../notification.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

  constructor(private _route:ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, private notifyService : NotificationService, private location: Location) {


   }

  ngOnInit(){

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    // console.log(myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },

      error => {

        console.log("Error...!!");
        console.log(error.errorMessage);
      }


    );
    
    this.blogHttpService.getAllBlogs();
  }
  
  public deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {

        console.log(data);
        this.notifyService.showSuccess("Post Deleted..!!", "Deleted..!!");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000);

      },

      error => {
        console.log("some error occured while deleting");
        console.log(error.errorMessage);
        this.notifyService.showError("Something is wrong", "Error");

      }
    )
  }//end of delete blog

  public goBackToPreviousPage():any {
    this.location.back();
  }
}
