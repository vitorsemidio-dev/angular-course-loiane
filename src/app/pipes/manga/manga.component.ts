import { MangaMock } from './manga-mock.model';
import { Component, OnInit } from '@angular/core';
import { MangaModel } from './manga.model';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  filtro: string;

  mangas: Array<MangaModel> = [...MangaMock];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000);
  });

  // Precisou ser ajustado
  valorAsync2 = interval(2000).pipe(take(1), map(v => 'Valor assincrono 2'));


  constructor() { }

  ngOnInit() {
  }

  obterMangas() {
    const mangas = this.mangas;
    const filtro = this.filtro;
    console.log('funcao'); // sendo chamada 2x
    if (mangas.length === 0 || filtro === undefined || filtro.trim() === '') {
      return mangas;
    }

    return mangas.filter(
      v => v.titulo.toLowerCase().indexOf(filtro.toLowerCase()) >= 0
    );
  }

  addManga(tituloManga: string) {
    const manga = new MangaModel();
    manga.titulo = tituloManga;
    // console.log(manga);
    this.mangas.push(manga);
    // console.log(this.mangas);
  }

}
