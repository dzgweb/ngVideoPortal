import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  LoaderComponent,
  PathNotFoundComponent
} from './components';

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
    MatProgressSpinnerModule
  ],
  exports: [
    ...components
  ]
})
export class LayoutModule { }
