import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import {
  CourseComponent,
  CourseListComponent,
  CourseFormComponent,
  CourseSearchComponent,
  CourseDeleteModalComponent
} from './components';

import { CoursesRoutingModule } from './courses-routing.module';
import { DatepickerComponent } from './components/course-form/datepicker/datepicker.component';
import { DurationComponent } from './components/course-form/duration/duration.component';
import { AuthorsComponent } from './components/course-form/authors/authors.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    CourseFormComponent,
    CourseSearchComponent,
    CourseDeleteModalComponent,
    DatepickerComponent,
    DurationComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    CoursesRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  entryComponents: [CourseDeleteModalComponent],
  exports: []
})
export class CoursesModule { }
