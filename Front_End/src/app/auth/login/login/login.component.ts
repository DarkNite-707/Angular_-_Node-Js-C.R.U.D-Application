import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthServiceService} from '../../auth-service.service';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthServiceService, private router: Router) { }

  option: string = this.router.url;

  ngOnInit(): void {
  }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

  onlogin(loginform: NgForm)
  {
    if (loginform.invalid)
    {
      return;
    }

    if (this.option == '/login'){
      this.authservice.login(loginform.value.enteredusername, loginform.value.enteredpassword)
      alert("Logged In")
      loginform.resetForm()
    } else {
      this.authservice.signup(loginform.value.enteredusername, loginform.value.enteredpassword)
      alert("Sign up successful")
      loginform.resetForm()
    }
  }

}
