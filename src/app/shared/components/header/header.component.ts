import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { User, AuthService } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: User;

  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.login();

    this.sub = this.authService.getUserInfo()
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogout() {
    console.log('User click Log off');
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
