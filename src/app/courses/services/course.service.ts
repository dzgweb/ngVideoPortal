import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// RxJs
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Course } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'http://localhost:3004/courses';

  filterText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public filterText$ = this.filterText.asObservable();

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.coursesUrl}/${+id}`;

    return this.http.get<Course>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCourse(course: Course): Observable<Course> {
    const url = `${this.coursesUrl}/${course.id}`;
    const body = JSON.stringify(course);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Course>(url, body, options)
      .pipe( catchError(this.handleError) );
  }

  createCourse(course: Course): Observable<Course> {

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

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
