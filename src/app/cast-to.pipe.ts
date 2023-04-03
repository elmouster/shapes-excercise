import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castTo'
})
export class CastToPipe implements PipeTransform {

  transform<S, T extends S>(value: S, type: T): T {
    return <T>value;
  }

}
