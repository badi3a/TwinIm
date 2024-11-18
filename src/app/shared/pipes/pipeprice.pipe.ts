import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeprice'
})
export class PipepricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return  value+'DNT';
  }

}
