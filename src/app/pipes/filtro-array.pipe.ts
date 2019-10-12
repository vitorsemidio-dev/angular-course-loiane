import { MangaModel } from './manga/manga.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: MangaModel[], ...args: any[]): any {

    if (args.length === 0 || !args) {
      return value;
    }

    const filter = args.toLocaleString().toLowerCase();
    if (!filter) return value;
    // console.log(filter);

    return value.filter(
      v => v.titulo.toLowerCase().indexOf(filter) !== -1
    );
  }

}
