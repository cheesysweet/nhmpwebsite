import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms"
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private backend : BackendService) { }

  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: [""], // initialized empty since we want user input
    password: [""]
  })
  }

  /*
  This method handles the login procedure by retriving all the users and then check is user input mathces the value in the databse,
   if so then proceed to determine which user logged in.
  */

  login(){
    this.http.get<any>("http://localhost:3000/api/users").subscribe( result => {
    const user = result.find(( data:any )=>{
      return data.username === this.loginForm.value.username && data.password === this.loginForm.value.password 
    })

    if(user){ // If user is found.
      if(user.username === "admin"){ // Checks if the username provided was for the admin page. 
      this.loginForm.reset();
      this.router.navigate(['admin'])
      } else { // Provides the officer page if the username wasnt admin since there are only two types of users.
        this.loginForm.reset();
        this.router.navigate(['officer'])
      } 
    } else {
      alert("username or password might be wrong")
    }

    }, err => {
      alert("something went wrong")
    })
  }

}
