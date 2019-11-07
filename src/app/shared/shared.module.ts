import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, BreadcrumbsComponent, FooterComponent} from './components';
import { CourseBorderDirective } from './directives/course-border.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseBorderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseBorderDirective
  ]
})
export class SharedModule { }
