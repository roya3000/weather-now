import { Pipe, PipeTransform } from '@angular/core';

const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

@Pipe({
  name: 'degToCompass'
})
export class DegToCompassPipe implements PipeTransform {

  transform(deg: number): string {
    const value = Math.round((deg / 22.5) + 0.5);
    return directions[value % 16];
  }

}
