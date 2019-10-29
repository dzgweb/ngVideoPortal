import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourceListComponent, CourceFormComponent, CourceSearchComponent } from './cources';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component:  CourceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
