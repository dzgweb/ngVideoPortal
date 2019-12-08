import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CourseComponent, CourseListComponent, CourseFormComponent, CourseSearchComponent } from './components';

import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [CourseListComponent, CourseComponent, CourseFormComponent, CourseSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    MaterialModule,
    CoursesRoutingModule
  ],
  exports: [CourseSearchComponent]
})
export class CoursesModule { }
