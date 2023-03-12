import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private postsdisplay: {_id:string,id:string,name:string,_v:string}[] =[];
  private updatedpostsdisplay = new Subject<{_id:string,id:string,name:string,_v:string}[]>();

  constructor(private http:HttpClient) { }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

  addpost_service(pid:string, pname:string)
  {
  this.http.post<{message:string,post:any}>('https://localhost:3000/api/posts', {id:pid,name:pname})
  .subscribe ((thepost)=>
  {
  this.postsdisplay.push(thepost.post);
  this.updatedpostsdisplay.next([...this.postsdisplay]);
  })
  }
  
  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  getpost_service() {
  this.http.get<{message:string,posts:any}>('https://localhost:3000/api/posts')
  .subscribe((thepost)=>
  {
  this.postsdisplay = thepost.posts
  this.updatedpostsdisplay.next([...this.postsdisplay]);
  })
  }
  
  deletepost_service(postid: string) {
    this.http
      .delete('https://localhost:3000/api/posts/' + postid)
      .subscribe(() => {
        const updatedpostsdeleted = this.postsdisplay.filter(post=> post._id !== postid);
        this.postsdisplay = updatedpostsdeleted;
        this.updatedpostsdisplay.next([...this.postsdisplay]);
      });
  }
  
  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  getUpdateListener()
  {
  return this.updatedpostsdisplay.asObservable();
  
  }
  
  }
  
  
