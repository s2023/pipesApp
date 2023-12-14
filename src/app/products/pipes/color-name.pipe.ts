import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  transform(value: Color): string {
    switch (value) {
      case Color.red: return 'Red';
      case Color.black: return 'Black';
      case Color.blue: return 'Blue';
      case Color.green: return 'Green';
      case Color.yellow: return 'Yellow';
      case Color.white: return 'White';
      default: return '';
    }
  }

}
