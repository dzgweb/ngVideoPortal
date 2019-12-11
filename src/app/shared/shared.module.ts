import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseBorderDirective } from './directives/course-border.directive';
import { OrderbyPipe, DurationPipe, FilterPipe  } from './pipes';

@NgModule({
  declarations: [
    CourseBorderDirective,
    OrderbyPipe,
    DurationPipe,
    FilterPipe
  ],
  providers: [FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CourseBorderDirective,
    OrderbyPipe,
    DurationPipe,
    FilterPipe
  ]
})
export class SharedModule { }
