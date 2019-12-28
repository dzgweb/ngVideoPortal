import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LayoutRoutingModule } from './layout-routing.module';
import {
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  LoaderComponent
} from './components';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

const components = [
  HeaderComponent,
  FooterComponent,
  BreadcrumbsComponent,
  PathNotFoundComponent,
  LoaderComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ...components
  ]
})
export class LayoutModule { }
