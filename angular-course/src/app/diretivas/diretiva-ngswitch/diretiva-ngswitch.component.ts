import { Component, OnInit } from '@angular/core';

import { AnimesMock } from './../animes-mock.model';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit {

  animes = AnimesMock;

  selecionado = '';

  constructor() { }

  ngOnInit() {
  }

}
