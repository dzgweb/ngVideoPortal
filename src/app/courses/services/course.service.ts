import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

import { Course } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'http://localhost:3004/courses';


  constructor(private http: HttpClient) {}

  getCourses(startIndex?: number, count?: number, searchText?: string, sortKey: string = 'date'): Observable<Course[]> {
    const queryParams = `?start=${startIndex || 0}` +
      (count ? `&count=${count}` : '') +
      (searchText ? `&textFragment=${searchText}` : '') +
      (sortKey ? `&sort=${sortKey}` : '');

    return this.http.get<Course[]>(`${this.coursesUrl}${queryParams}`)
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

    return this.http.put<Course>(url, body, options)
      .pipe( catchError(this.handleError) );
  }

  createCourse(course: Course): Observable<Course> {
    const url = this.coursesUrl;
    const body = JSON.stringify(course);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Course>(url, body, options)
      .pipe(
        catchError( this.handleError )
      );
  }

  deleteCourse(course: Course): Observable<Course[]> {
    const url = `${this.coursesUrl}/${course.id}`;

    return this.http.delete(url)
      .pipe(
        concatMap(() => this.getCourses())
      );
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
