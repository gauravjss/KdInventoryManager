import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArray: any, filterString: string, propName: string): any {

    if (!inputArray || inputArray.length === 0 || filterString === '' || !filterString) {
      return inputArray;
    }
    return _.filter(inputArray, (item) => {
      if (item[propName] !== undefined && item[propName] !== null) {
        // Converting toString Explicitly so that numbers are converted to string for lower case.
        return (item[propName]).toString().toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
      }
      // Return matches for all blank, null and undefined values.
      return true;
    });
  }
}
