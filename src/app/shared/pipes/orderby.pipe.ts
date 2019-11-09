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
      // console.log(a.duration, b.duration);
      if (a.duration > b.duration) {
        // console.log(a.duration > b.duration);
        return 1;
      } else if (a.duration > b.duration) {
        return -1;
      }
      return 0;
    });

    return arraySort;
  }

}
