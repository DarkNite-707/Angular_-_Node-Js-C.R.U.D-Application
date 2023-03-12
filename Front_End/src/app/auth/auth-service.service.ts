import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;

  constructor(private http: HttpClient) { }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

  signup (userusername: string, userpassword: string){
    this.http.post('https://localhost:3000/api/users/Register_User_Function', {username:userusername, password: userpassword})
    .subscribe(response => {
    });
  }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  login (userusername: string, userpassword: string)
  {
    this.http.post<{token: string}>('https://localhost:3000/api/users/login_Function', {username:userusername, password:userpassword})
    .subscribe(response => {
      const token = response.token;
      this.token = token;
    })
  }

  getToken(){
    return this.token;
  }
}
