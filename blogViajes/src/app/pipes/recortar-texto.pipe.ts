import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let arr = value.split(" ");
    arr = arr.slice(0, 25);
    return `${arr.join(" ")}...`;
  }

}
