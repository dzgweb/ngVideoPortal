import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent, CourseFormComponent } from './courses';
import { LoginComponent } from './users';

import { PathNotFoundComponent } from './layout/components';
import {AuthGuard} from './core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component:  CourseListComponent
  },
  {
    path: 'login',
    component:  LoginComponent
  },
  {
    path: 'courses/new',
    component:  CourseFormComponent
  },
  {
    path: 'courses/:id',
    component: CourseFormComponent
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
