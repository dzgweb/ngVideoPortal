import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

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

    return checkLogin(state.url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isAuthorized) {
      return true;
    }

    const loginPageUrlTree = this.router.parseUrl('/courses');

    return this.authService.isAuthorized ? true : loginPageUrlTree;
  }

}
