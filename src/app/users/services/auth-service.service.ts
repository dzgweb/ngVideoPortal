import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { User } from '../';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuthenticated = false;
  private token = '1234';
  private user: User = {id: 1, firstName: 'John', lastName: 'Smit'};

  constructor() { }

  login(): Observable<boolean> {
    localStorage.setItem(this.token, JSON.stringify(this.getUserInfo()));

    return of(true)
      .pipe(
        delay(1000),
        tap(val => this.isAuthenticated = val)
      );
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


/*
  setItem(cartProducts: CartModel): void {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  getItem(): CartModel {
    return JSON.parse(localStorage.getItem('cartProducts'));
  }

  clear(): void {
    localStorage.clear();
  }

  hasItem(): boolean {
    if (localStorage.getItem('cartProducts')) {
      return true;
    }
    return false;
  }
*/