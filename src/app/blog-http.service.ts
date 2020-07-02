import { Injectable } from '@angular/core';
//impoting http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observables related code.
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'Y2NjZjVjNGZhZjlmNjMyZjc0MDc2ZmM3ODY2OTQ4MjBlYzZkMjU2MTM4M2ZjNzc4YmRjNjI2YmVhNWE2ZjM1Mjc5MzM2NGRjZDFiYjg3N2VjNzE5Y2FhM2Q0MzlkM2E1YmY2Nzk0NzM4ZGY0MDUwYmM1MmVmOTBhMjE3MmU2ZWRkNQ==';



  constructor(private _http:HttpClient) { 

    console.log('blog-http service is called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs():any{

    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+ this.authToken);
    return myResponse;
    
  }

  public getSingleBlogInformation(currentBlogId):any {

    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+ currentBlogId+'?authToken='+'Y2NjZjVjNGZhZjlmNjMyZjc0MDc2ZmM3ODY2OTQ4MjBlYzZkMjU2MTM4M2ZjNzc4YmRjNjI2YmVhNWE2ZjM1Mjc5MzM2NGRjZDFiYjg3N2VjNzE5Y2FhM2Q0MzlkM2E1YmY2Nzk0NzM4ZGY0MDUwYmM1MmVmOTBhMjE3MmU2ZWRkNQ==')
    return myResponse;
  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    let data ={}
    const newLocal = this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken;
    let myResponse = this._http.post(newLocal,data);
    return myResponse;
  }

  public editBlog(blogId,blogData): any {

    let myResponse = this._http.put(this.baseUrl+ '/' + blogId +'/edit'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }

}
