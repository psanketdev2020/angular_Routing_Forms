import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, serachProduct: string) {
    if (value.length === 0) {
      return value
    }
    return value.filter((val) => {
      return val.name.toLowerCase().indexOf(serachProduct.toLowerCase()) > -1;
    });
  }
}
