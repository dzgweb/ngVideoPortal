import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../../core';
import { User } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<User>;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnInit() {
    this.user$ = this.authService.userInfo$;

    if (this.hasUserInfo) {
      this.authService.getUser().subscribe((user: User) => this.authService.userInfo.next(user));
    }
  }

  onLogout(): void {
    console.log('User click Log off');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
