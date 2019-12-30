import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../courses';

@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
  transform(array: Array<Course>): Array<Course> {
    if (!array || !Array.isArray(array)) {
      return array;
    }

    const arraySort = array.sort((a: Course, b: Course) => {
      // let aDate = new Date(a.creationDate);
      // let bDate = new Date(b.creationDate);
      if (a.date > b.date) {
        return 1;
      } else if (a.date < b.date) {
        return -1;
      }
      return 0;
    });

    return arraySort;
  }
}
