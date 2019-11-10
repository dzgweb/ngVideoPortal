import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, BreadcrumbsComponent, FooterComponent} from './components';
import { CourseBorderDirective } from './directives/course-border.directive';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
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
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseBorderDirective,
    OrderbyPipe,
    DurationPipe,
    FilterPipe
  ]
})
export class SharedModule { }
