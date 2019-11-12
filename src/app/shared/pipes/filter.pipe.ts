import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

import { Course } from '../../courses';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Array<Course>, searchText: string): any {
    if (!searchText) {
      return courses;
    }

    return courses.filter(course => course.title.includes(searchText));
  }

}
