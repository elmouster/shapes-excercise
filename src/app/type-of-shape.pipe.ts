import { Pipe, PipeTransform } from '@angular/core';
import { Circle, Rectangle, Shape, Square } from './shape.model';

@Pipe({
  name: 'typeOfShape'
})
export class TypeOfShapePipe implements PipeTransform {

  transform(value: Shape): string {
    if (value instanceof Circle) {
      return 'Circle'
    }
    if (value instanceof Rectangle) {
      return 'Rectangle'
    }
    if (value instanceof Square) {
      return 'Square'
    }
    return '';
  }
}
