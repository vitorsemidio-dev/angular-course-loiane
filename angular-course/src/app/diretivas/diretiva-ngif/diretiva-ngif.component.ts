import { Component, OnInit } from '@angular/core';
import { AnimesMock } from './../animes-mock.model';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  animes = AnimesMock;

  constructor() { }

  ngOnInit() {
  }

  deletarAnime(index) {
    this.animes.splice(index, 1);
  }

  adicionarAnime(novoAnime) {
    this.animes.push(novoAnime.value);
    novoAnime.value = '';
  }

}
