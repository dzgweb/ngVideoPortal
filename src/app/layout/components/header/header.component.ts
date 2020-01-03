import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, Observable } from 'rxjs';

import { AuthService } from '../../../core';
import { User } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user$: Observable<User>;

  // private sub: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnInit() {
    this.user$ = this.authService.userInfo$;
    // this.user$ = this.userService.getUser();
    // this.sub = this.userService.getUser().subscribe((user: User) => this.user = user);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onLogout(): void {
    console.log('User click Log off');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
