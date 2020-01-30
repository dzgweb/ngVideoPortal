import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBorderDirective } from './directives/course-border.directive';
import { OrderbyPipe, DurationPipe, FilterPipe  } from './pipes';

import { AuthorsValidatorDirective } from '../shared/validators/authors-validator.directive';

const items = [
  CourseBorderDirective,
  OrderbyPipe,
  DurationPipe,
  FilterPipe,
  AuthorsValidatorDirective
];

@NgModule({
  declarations: [...items],
  providers: [FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [...items]
})
export class SharedModule { }
