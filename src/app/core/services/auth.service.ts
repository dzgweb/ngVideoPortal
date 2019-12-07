import { Injectable } from '@angular/core';

import { User } from '../../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '1234';
  private user: User = {id: 1, firstName: 'John', lastName: 'Smit'};

  constructor() { }

  get isAuthorized() {
    return !!this.getUserInfo();
  }

  login() {
    localStorage.setItem(this.token, JSON.stringify(this.getUserInfo()));
  }

  logout(): void {
    localStorage.removeItem(this.token);
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem(this.token));
  }
}
