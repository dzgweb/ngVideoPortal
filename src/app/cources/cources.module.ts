import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourceComponent, CourceListComponent, CourceFormComponent, CourceSearchComponent } from './components';

@NgModule({
  declarations: [CourceListComponent, CourceComponent, CourceFormComponent, CourceSearchComponent],
  imports: [
    CommonModule
  ]
})
export class CourcesModule { }
