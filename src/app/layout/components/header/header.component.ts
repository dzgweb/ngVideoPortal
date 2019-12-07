import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../users';
import { AuthService } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  onLogout(): void {
    console.log('User click Log off');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
