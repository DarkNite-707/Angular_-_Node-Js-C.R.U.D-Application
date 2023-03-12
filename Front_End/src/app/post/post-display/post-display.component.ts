import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts:{_id:string,id:string,name:string, _v:string} [] =[];
 
  constructor (public postservice: PostServiceService) { }

private postsubscription!: Subscription;

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
ngOnInit () {
  this.postservice.getpost_service();
  this.postsubscription = this.postservice.getUpdateListener()
  .subscribe((posts:{_id:string,id:string,name:string,_v:string}[])=>
  {
  this.posts = posts;
  });
  }
  
  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  ngOnDestroy()
  {
  this.postsubscription.unsubscribe()
  }
  
  ondelete(postid: string){
    this.postservice.deletepost_service(postid)
  }

  }


