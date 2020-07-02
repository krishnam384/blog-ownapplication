import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  //declare dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "Category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "This is a Big Body ",
      "description": "This is blog 1 description",
      "title": "This is Blog 1"
    },
    {
      "blogId": "2",
      "lastModified":"2017-11-20T12:20:47.854Z",
      "created": "2017-11-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "Category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "<h1>This is a Big Body</h1>",
      "description": "This is blog 2 description",
      "title": "This is Blog 2"
    },
    {
      "blogId": "3",
      "lastModified":"2017-12-20T12:20:47.854Z",
      "created": "2017-12-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "Category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "This is a Big Body ",
      "description": "This is blog 3 description",
      "title": "This is Blog 3"
    }
  ]

  public getAllBlogs():any{
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId):any {
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
        return this.currentBlog;
      }
    }
  }

  constructor() { 

   
  }


}
