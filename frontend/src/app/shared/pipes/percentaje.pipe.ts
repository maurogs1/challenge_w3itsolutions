import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageFormat'
})
export class PercentageFormatPipe implements PipeTransform {
  transform(value: string): string {    
    return  value.slice(0,5) + '%';
  }
}
