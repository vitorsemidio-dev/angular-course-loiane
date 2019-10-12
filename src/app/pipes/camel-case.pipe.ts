import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const values: string = value.split(' ');
    let result = '';
    for (const v of values) {
      result += this.capitalize(v);
    }
    return result;
  }

  capitalize(value: string): string {
    return `${value[0].toUpperCase()}${value.slice(1).toLowerCase()} `;
  }

}
