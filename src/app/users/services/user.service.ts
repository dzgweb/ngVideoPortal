import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { USER_ENDPOINT, AuthService } from '../../core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getUser(): Observable<User> {
    if (this.authService.isAuthorized) {
      const token = this.authService.getAuthToken();
      const payload = {
        token
      };

      return this.http.post<User>(USER_ENDPOINT, payload);
    }
  }
}
