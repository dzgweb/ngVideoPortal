import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { DeleteCourseDialogComponent } from './components/';


@NgModule({
  declarations: [DeleteCourseDialogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
