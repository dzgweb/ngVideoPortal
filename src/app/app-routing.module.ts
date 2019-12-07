import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent, CourseFormComponent } from './courses';
import { LoginComponent } from './users';

import { PathNotFoundComponent } from './layout/components';
import { AuthGuard } from './core';

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
    canActivate: [AuthGuard],
    component:  CourseFormComponent
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: CourseFormComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
