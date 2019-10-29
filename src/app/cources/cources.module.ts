import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourceComponent, CourceListComponent, CourceFormComponent, CourceSearchComponent } from './components';

@NgModule({
  declarations: [CourceListComponent, CourceComponent, CourceFormComponent, CourceSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CourceSearchComponent]
})
export class CourcesModule { }
