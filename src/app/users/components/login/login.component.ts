import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services';
import { User} from '../../../users/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.isAuthorized) {
      this.router.navigate(['courses']);
    }
  }

  onLogin(loginForm: NgForm) {
    // Form model
    // console.log(loginForm.form);

    this.authService
      .login(loginForm.value.username, loginForm.value.password)
      .subscribe(() => {
        const redirectUrl = this.authService.redirectUrl;

        if (redirectUrl) {
          this.authService.redirectUrl = null;
          this.router.navigateByUrl(redirectUrl);
        } else {
          this.router.navigate(['courses']);
        }
      });
  }
}
