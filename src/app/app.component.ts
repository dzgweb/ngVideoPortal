import { Component } from '@angular/core';

import { AuthService } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Video Courses';

  constructor(private authService: AuthService) { }

  get userIsAuthorized(): boolean {
    return this.authService.isAuthorized;
  }
}
