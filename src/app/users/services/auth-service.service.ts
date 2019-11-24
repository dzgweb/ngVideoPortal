import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { User } from '../';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuthenticated = false;

  constructor() { }

  login(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(1000),
        tap(val => this.isAuthenticated = val)
      );
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getUserInfo(): User {
    return {id: 1, firstName: 'Valera', lastName: 'Petrov'};
  }
}
