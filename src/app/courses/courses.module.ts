import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseComponent, CourseListComponent, CourseFormComponent, CourseSearchComponent } from './components';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CourseListComponent, CourseComponent, CourseFormComponent, CourseSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [CourseSearchComponent]
})
export class CoursesModule { }
