import { AnimesMock } from './../animes-mock.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {
  animes = AnimesMock;
  animeSelecionado = '';

  constructor() { }

  ngOnInit() {
  }

}
