import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value *1.6;

  }

}
