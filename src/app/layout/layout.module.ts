import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import {BreadcrumbsComponent, FooterComponent, HeaderComponent} from './components';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PathNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class LayoutModule { }
