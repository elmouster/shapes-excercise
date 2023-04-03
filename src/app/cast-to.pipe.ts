import { Pipe, PipeTransform } from '@angular/core';
import { Circle, Rectangle, Shape, Square } from './shape.model';

@Pipe({
  name: 'castTo'
})
export class CastToPipe implements PipeTransform {

  transform(value: (Circle | Rectangle | Square)): any {
    switch (value._type) {
      case 'Square':
        return value as Square
      case 'Circle':
        return value as Circle
      case 'Rectangle':
        return value as Rectangle
    
      default:
        break;
    }
  }

}
