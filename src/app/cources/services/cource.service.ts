import { Injectable } from '@angular/core';

// RxJs
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError, map } from 'rxjs/operators';

import { Course } from '../models';

const courses = [
  {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '12.09.2018',
    duration: 88,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
     about various components of a course description. Course descriptions report information about a university or college's
     classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
     descriptions for all courses offered during a particular semester.`
  },
  {
    id: 2,
    title: 'Video Course 2. Name tag',
    creationDate: '11.10.2018',
    duration: 77,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`
  },
  {
    id: 3,
    title: 'Video Course 3. Name tag',
    creationDate: '12.11.2018',
    duration: 105,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`
  },
];

const coursesObservable: Observable<Array<Course>> = of(courses);

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourses(): Observable<Course[]> {
    return coursesObservable;
  }

  getCourse(id: number | string): Observable<Course> {
    return this.getCourses().pipe(
      map((coursesList: Array<Course>) => coursesList.find(course => course.id === +id)),
      catchError(err => throwError('Error in getUser method'))
    );
  }

  addCourse(): void {
    const lastId = courses[courses.length - 1].id;
    courses.push(new Course(lastId + 1, 'new course', (new Date()).toString(), 0, 'Learn about where you can ' +
      // tslint:disable-next-line:max-line-length
      'find course descriptions, what information they include, how they work, and details about various components of a course description.' +
      ' Course descriptions report information about a university or college\'s classes.' ));
  }

  editCourse(course: Course): void {
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
}
