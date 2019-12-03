import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent, CourseFormComponent } from './courses';
import { LoginComponent } from './users';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component:  CourseListComponent
  },
  {
    path: 'login',
    component:  LoginComponent
  },
  {
    path: 'add',
    component:  CourseFormComponent
  },
  {
    path: 'edit/:taskID',
    component: CourseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
