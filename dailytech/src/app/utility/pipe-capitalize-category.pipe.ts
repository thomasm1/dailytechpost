import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'pipeCapitalizeCategory'
})

export class PipeCapitalizeCategoryPipe implements PipeTransform {

  constructor(private titlecasePipe: TitleCasePipe) {}

  transform(value: any, ...args: any[]): any {
    if (typeof value == 'string') {
      if (value.toLowerCase() == 'nyregion') {
        return 'NY Region';
      }
      if (value.toLowerCase() == 'realestate') {
        return 'Real Estate';
      } else if (value.toLowerCase() == 'sundayreview') {
        return 'Sunday Review';
      } else if (value.toLowerCase() == 'tmagazine') {
        return 'T Magazine';
      }
      return this.titlecasePipe.transform(value);
    }
    return value;
  }

}
