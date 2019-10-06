import { MangaMock } from './manga-mock.model';
import { Component, OnInit } from '@angular/core';
import { MangaModel } from './manga.model';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  mangas: Array<MangaModel> = [...MangaMock];

  constructor() { }

  ngOnInit() {
  }

}
