import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBorderDirective } from './directives/course-border.directive';
import { OrderbyPipe, DurationPipe, FilterPipe  } from './pipes';

const items = [
  CourseBorderDirective,
  OrderbyPipe,
  DurationPipe,
  FilterPipe
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
