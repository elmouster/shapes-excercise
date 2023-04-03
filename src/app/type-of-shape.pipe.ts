import { Pipe, PipeTransform } from '@angular/core';
import { Circle, Rectangle, Square } from './shape.model';

@Pipe({
  name: 'typeOfShape'
})
export class TypeOfShapePipe implements PipeTransform {

  transform(value: Circle | Rectangle | Square): string {
    return typeof value;
  }
}
