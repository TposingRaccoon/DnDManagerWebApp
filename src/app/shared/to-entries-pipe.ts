import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEntries'
})
export class ToEntriesPipe implements PipeTransform {

  transform(value: any) {
    return Object.entries<any>(value);
  }

}
