import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../core/@ngrx';
import { selectLoginError } from '../../../core/@ngrx/users';
import * as UsersActions from '../../../core/@ngrx/users/users.actions';

import { AuthService } from '../../../core/services';
import { User} from '../../../users/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginError$: Observable<Error | string>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.loginError$ = this.store.pipe(select(selectLoginError));

    if (this.authService.isAuthorized) {
      this.router.navigate(['courses']);
    }
  }

  onLogin(loginForm: NgForm) {
    const loginData = {
      login: loginForm.value.username,
      password: loginForm.value.password,
    };

    // this.store.dispatch(UsersActions.loginUser(loginData));

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
