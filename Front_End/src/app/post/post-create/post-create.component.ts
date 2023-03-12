import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { PostServiceService} from '../post-service.service'

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postservice: PostServiceService) { }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  onaddpost(postform: NgForm){
    if (postform.invalid){
      alert("Invalid")
      return
    }
    alert(postform.value.enteredID+':'+postform.value.enteredName)

    this.postservice.addpost_service(postform.value.enteredID,postform.value.enteredName)
   postform.resetForm()
  }

}
