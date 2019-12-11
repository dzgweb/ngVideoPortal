import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../core';
import {CourseFormComponent, CourseListComponent} from './components';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component:  CourseListComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
