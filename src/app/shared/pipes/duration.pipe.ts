import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const hours = (value - value % 60) / 60;
    const hoursStr = hours ? `${hours}h ` : '';
    const min = value - hours * 60;
    const minStr = `${min} min`;

    return `${hoursStr}${minStr}`;
  }

}
