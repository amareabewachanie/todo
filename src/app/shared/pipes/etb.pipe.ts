import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etb',
  standalone: false
})
export class EtbPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
