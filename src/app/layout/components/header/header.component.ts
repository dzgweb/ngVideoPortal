import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../core/@ngrx';
import * as UsersActions from '../../../core/@ngrx/users';

import { Observable } from 'rxjs';

import { AuthService } from '../../../core';
import { User } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<User>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnInit() {
    this.user$ = this.authService.userInfo$;

    if (this.hasUserInfo) {
      this.authService.getUser().subscribe((user: User) => this.authService.userInfo.next(user));

      this.store.dispatch(UsersActions.getUser());
    }
  }

  onLogout(): void {
    console.log('User click Log off');
    // this.authService.logout();
    // this.router.navigate(['/login']);
    this.store.dispatch(UsersActions.logout());
  }

}
