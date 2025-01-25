import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString'
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (!value) return '';
    return value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }
}
