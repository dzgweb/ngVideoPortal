import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    CoursesModule,
    UsersModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
