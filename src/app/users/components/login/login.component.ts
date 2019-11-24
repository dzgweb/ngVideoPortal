import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  // user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    // Form model
    console.log(loginForm.form);
    // Form value
    console.log(`Login: ${JSON.stringify(loginForm.value)}`);
  }

}
