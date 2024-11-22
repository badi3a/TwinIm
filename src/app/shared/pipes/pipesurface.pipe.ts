import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesurface'
})
export class PipesurfacePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+'m²';
  }

}
