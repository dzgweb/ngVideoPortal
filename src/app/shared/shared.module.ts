import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, BreadcrumbsComponent, FooterComponent} from './components';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class SharedModule { }
