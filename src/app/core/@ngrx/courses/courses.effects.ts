import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { mergeMap, map, catchError} from 'rxjs/operators';

import * as CoursesActions from './courses.action';
import { CourseService } from '../../../courses';

@Injectable()
export class CoursesEffects {


  getCourses$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.getCourses),
    mergeMap(() => this.courseService.getCourses()
      .pipe(
        map(courses => CoursesActions.getCoursesSuccess({ courses })),
        catchError(error => of(CoursesActions.getCoursesError({ error })))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {
    console.log('[TASKS EFFECTS]');
  }
}
