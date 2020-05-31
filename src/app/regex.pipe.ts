import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underbarEliminator'
})
export class UnderbarEliminator implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.split('_')[0];
  }
}