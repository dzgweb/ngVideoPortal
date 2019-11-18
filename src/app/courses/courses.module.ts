import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CourseComponent, CourseListComponent, CourseFormComponent, CourseSearchComponent } from './components';


@NgModule({
  declarations: [CourseListComponent, CourseComponent, CourseFormComponent, CourseSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    MaterialModule
  ],
  exports: [CourseSearchComponent]
})
export class CoursesModule { }
