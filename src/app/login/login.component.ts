import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getuserValue(form: NgForm)
  {
  console.log(form.value)
  console.log("login form ====>")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
