import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

import { Course } from '../../courses';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // array filtering courses
  // transform(courses: Array<Course>, searchText: string): any {
  //   if (!searchText) {
  //     return courses;
  //   }

  //   return courses.filter(course => course.title.includes(searchText));
  // }

  // Observable array filtering courses
  transform(courses$: Observable<Array<Course>>, searchText: string): Observable<Array<Course>> {
    if (!searchText) {
      return courses$;
    }

    return courses$.pipe(
      map(c => c.filter(i => i.title.includes(searchText)))
    );
  }
}
