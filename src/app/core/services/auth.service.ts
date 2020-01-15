import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { User } from '../../users';
import { tap, catchError } from 'rxjs/operators';

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

    return this.http.post<LoginResponse>(LOGIN_ENDPOINT, loginPayload)
      .pipe(
        tap(({ token }: LoginResponse) => {
          this.storeAuthToken(token);
          this.getUser().subscribe((user: User) => this.userInfo.next(user));
        }),
        catchError(this.handleError)
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

  storeAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
