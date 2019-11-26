import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { User } from '..';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = true;
  private token = '1234';
  private user: User = {id: 1, firstName: 'John', lastName: 'Smit'};

  constructor() { }

  login() {
    localStorage.setItem(this.token, JSON.stringify(this.getUserInfo()));
    this.isAuthenticated = true;
    console.log('logged in successfully');

    // return of(true)
    //   .pipe(
    //     delay(1000),
    //     tap(() => localStorage.setItem(this.token, JSON.stringify(this.getUserInfo()))),
    //     tap(val => this.isAuthenticated = val),
    //     tap(() => console.log('logged in successfully'))
    //   );
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.user = null;
    this.isAuthenticated = false;
  }

  getUserInfo(): Observable<User> {
    return of(this.user);
  }
}
