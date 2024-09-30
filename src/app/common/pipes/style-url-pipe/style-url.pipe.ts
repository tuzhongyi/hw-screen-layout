import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url',
})
export class StyleUrlPipe implements PipeTransform {
  transform(value?: string, ...args: unknown[]): string {
    if (value) {
      return `url(${value})`;
    }
    return '';
  }
}
