import { MangaMock } from './manga-mock.model';
import { Component, OnInit } from '@angular/core';
import { MangaModel } from './manga.model';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  filtro: string;

  mangas: Array<MangaModel> = [...MangaMock];

  constructor() { }

  ngOnInit() {
  }

  addManga(tituloManga: string) {
    const manga = new MangaModel();
    manga.titulo = tituloManga;
    // console.log(manga);
    this.mangas.push(manga);
    // console.log(this.mangas);
  }

}
