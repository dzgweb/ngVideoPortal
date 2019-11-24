import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { User, AuthServiceService } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  public user: User;

  private sub: Subscription;

  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit() {
    this.authServiceService.login();

    this.sub = this.authServiceService.getUserInfo()
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogout() {
    console.log('User click Log off');
    this.authServiceService.logout();
  }


}
