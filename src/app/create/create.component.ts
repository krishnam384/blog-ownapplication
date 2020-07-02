import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router,private notifyService : NotificationService) { 

  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Drama","Comedy","Action","Technology"]

  ngOnInit(): void {
  }

  public createBlog():any {

    let blogData = {
  
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.notifyService.showSuccess("Blog Posted successfully !!", "Posted..!!");
        setTimeout(()=> {
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)

      },

      error => {
        console.log("Error..!!");
        console.log(error.errorMessage);
        this.notifyService.showError("Something is wrong", "Error");
      }


    )


  }

}
