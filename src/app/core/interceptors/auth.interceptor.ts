import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

import { AuthService, LoaderService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
      private authService: AuthService,
      private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getAuthToken() || '';

    this.loaderService.showLoader();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = request.clone({
      setHeaders: {
        Authorization: token
      }
      // headers: request.headers.set('Authorization', token)
    });

    return next.handle(authReq).pipe(
      delay(300),
      finalize(() => this.loaderService.hideLoader())
    );
  }
}
