import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('CanActivateGuard is called');

    const { url } = state;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): Observable<boolean | UrlTree> {
    if (this.authService.isAuthorized) {
      return of(true);
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page, return UrlTree
    const loginPageUrlTree = this.router.parseUrl('/login');

    return of(loginPageUrlTree);
  }

}
