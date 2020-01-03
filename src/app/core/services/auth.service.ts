import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { User } from '../../users';
import { tap } from 'rxjs/operators';

import { LoginResponse } from '../models/loginResponse';
import { LOGIN_ENDPOINT, USER_ENDPOINT} from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;
  public userInfo: Subject<User> = new Subject<User>();
  public userInfo$ = this.userInfo.asObservable();

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
        tap(({ token }: LoginResponse) => {
          this.storeAuthToken(token);
          this.getUser().subscribe((user: User) => this.userInfo.next(user));
        })
      );
  }

  logout(): void {
    this.clearAuthToken();
    this.userInfo.next(null);
  }

  getUser(): Observable<User> {
    if (this.isAuthorized) {
      const token = this.getAuthToken();
      const payload = {
        token
      };

      return this.http.post<User>(USER_ENDPOINT, payload);
    }
  }

  private storeAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  private clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }

}
