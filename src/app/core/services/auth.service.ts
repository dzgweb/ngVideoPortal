import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../../users';
import { tap } from 'rxjs/operators';

import { LoginResponse } from './loginResonse';
import { BASE_URL } from '../config';

export const LOGIN_ENDPOINT = `${BASE_URL}/auth/login`;
export const USER_ENDPOINT = `${BASE_URL}/auth/userinfo`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private token = '1234';
  // private user: User = {id: 1, firstName: 'John', lastName: 'Smit'};
  public redirectUrl: string;

  constructor(private http: HttpClient) { }

  get isAuthorized(): boolean {
    // return !!this.getUserInfo();
    return !!JSON.parse(localStorage.getItem('authToken'));
  }

  login(login: string, password: string): Observable<LoginResponse> {
    // localStorage.setItem(this.token, userLogin);
    console.log(login, password);


    const loginPayload = {
      login,
      password
    };

    return this.http
      .post(LOGIN_ENDPOINT, loginPayload)
      .pipe(
        tap(({ token }: LoginResponse) => this.storeAuthToken(token))
      );
  }

  logout(): void {
    this.clearAuthToken();
  }

  private storeAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  private clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  getUserInfo(): User | null {
     return JSON.parse(localStorage.getItem('authToken'));
  }
}
