import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseComponent, CourseListComponent, CourseFormComponent, CourseSearchComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CourseListComponent, CourseComponent, CourseFormComponent, CourseSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [CourseSearchComponent]
})
export class CoursesModule { }
