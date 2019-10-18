import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './components/cource-list/cource-list.component';
import { CourceComponent } from './components/cource/cource.component';
import { CourceFormComponent } from './components/cource-form/cource-form.component';
import { CourceSearchComponent } from './components/cource-search/cource-search.component';


@NgModule({
  declarations: [CourceListComponent, CourceComponent, CourceFormComponent, CourceSearchComponent],
  imports: [
    CommonModule
  ]
})
export class CourcesModule { }
