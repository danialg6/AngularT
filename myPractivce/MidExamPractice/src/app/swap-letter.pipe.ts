import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapLetter'
})
export class SwapLetterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
