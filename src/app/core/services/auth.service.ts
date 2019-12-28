import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../../users';
import { tap } from 'rxjs/operators';

import { LoginResponse } from '../models/loginResponse';
import { LOGIN_ENDPOINT } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;

  constructor(private http: HttpClient) { }

  get isAuthorized(): boolean {
    return !!this.getAuthToken();
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  login(login: string, password: string): Observable<LoginResponse> {
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
