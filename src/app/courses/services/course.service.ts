import { Injectable } from '@angular/core';

// RxJs
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Course } from '../models';
import { courses } from '../mock-courses';

const coursesObservable: Observable<Array<Course>> = of(courses);

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  filterText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public filterText$ = this.filterText.asObservable();

  constructor() { }

  getCourses(): Observable<Course[]> {
    return coursesObservable;
  }

  getCourse(id: number | string): Observable<Course> {
    return this.getCourses().pipe(
      map((coursesList: Array<Course>) => coursesList.find(course => course.id === +id)),
      catchError(err => throwError('Error in getCourse method'))
    );
  }

  createCourse(course: Course): void {
    let lastId = 0;
    courses.map(c => {
      if (c.id > lastId) { lastId = c.id; }
    });

    const newCourse = { ...course, id: ++lastId };

    courses.push(newCourse);
  }

  updateCourse(course: Course): void {
    const i = courses.findIndex(item => item.id === course.id);

    if (i > -1) {
      courses.splice(i, 1, course);
    }
  }

  deleteCourse(course: Course): void {
    const i = courses.findIndex(item => item.id === course.id);

    if (i > -1) {
      courses.splice(i, 1);
    }
  }

  getFilterText(): BehaviorSubject<string> {
    return this.filterText;
  }
}
