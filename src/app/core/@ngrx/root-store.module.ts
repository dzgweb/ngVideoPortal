import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from './../../../environments/environment';
import { metaReducers } from './meta-reducers';
import { CoursesStoreModule } from './courses/courses-store.module';
import { UsersStoreModule } from './users/users-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      // metaReducers,
      runtimeChecks: {
      //  strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoursesStoreModule,
    UsersStoreModule,
  ]
})
export class RootStoreModule { }
