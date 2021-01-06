/**
 * All the custom pipes are added here
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tickToTime',
})
export class TickToTimePipe implements PipeTransform {
  transform(value: number): string {
    let time = '';
    value = value / 10000000 / 60;
    const h = (value / 60).toString().split('.')[0];
    const m = Math.round(value - parseInt(h, 10) * 60);
    if (h !== '0') {
      time = `${h}hr ${m} min`;
    } else {
      time = `${m} min`;
    }

    return time;
  }
}
