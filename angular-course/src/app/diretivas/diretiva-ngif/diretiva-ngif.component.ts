import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  animes = [
    'Neverland',
    'Death Note',
    'Ousama Game',
    'Btooom!'
  ];

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
