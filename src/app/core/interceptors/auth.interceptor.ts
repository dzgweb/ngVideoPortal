import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
      private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getAuthToken() || '';

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = request.clone({
      setHeaders: {
        Authorization: token
      }
      // headers: request.headers.set('Authorization', token)
    });

    return next.handle(authReq);
  }
}
