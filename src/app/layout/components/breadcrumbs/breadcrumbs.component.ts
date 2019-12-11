import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';

import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public url = '';

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.url = '';
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
          this.url = event.url.replace('/courses', '');
    });
  }

}
