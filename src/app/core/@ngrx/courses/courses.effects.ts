import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { concatMap, switchMap, mergeMap, map, catchError, pluck, tap} from 'rxjs/operators';

import * as CoursesActions from './courses.action';
import { CourseService } from '../../../courses';
import { ICourse } from '../../../courses';

@Injectable()
export class CoursesEffects {


  getCourses$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.getCourses),
    mergeMap(action => this.courseService.getCourses(action.currentPage, action.countCourses, action.searchText, action.sortBy)
      .pipe(
        map(courses => CoursesActions.getCoursesSuccess({ courses })),
        catchError(error => of(CoursesActions.getCoursesError({ error })))
      ))
    )
  );

  getCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.getCourse),
    pluck('courseID'),
    mergeMap(courseID => this.courseService.getCourse(courseID)
      .pipe(
        map(course => CoursesActions.getCourseSuccess({ course })),
        catchError(error => of(CoursesActions.getCourseError({ error })))
      ))
    )
  );

  deleteCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.deleteCourse),
    pluck('course'),
    mergeMap(course => this.courseService.deleteCourse(course)
      .pipe(
        map(() => CoursesActions.deleteCourseSuccess({ course })),
        catchError(error => of(CoursesActions.deleteCourseError({ error })))
      ))
    )
  );

  updateCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.updateCourse),
    mergeMap(action =>
      this.courseService.updateCourse(action.course)
        .pipe(
          map(() => CoursesActions.updateCourseSuccess({ course: action.course })),
          tap(() => this.router.navigate(['courses'])),
          catchError(error => of(CoursesActions.updateCourseError({ error })))
        )
      )
    )
  );

  createCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.createCourse),
    mergeMap(action =>
      this.courseService.createCourse(action.course)
        .pipe(
          map(() => CoursesActions.createCourseSuccess({ course: action.course })),
          tap(() => this.router.navigate(['courses'])),
          catchError(error => of(CoursesActions.createCourseError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router
  ) { }
}
