import { Component, OnInit } from '@angular/core';
import { AnimesMock } from './../animes-mock.model';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {
  animes = AnimesMock;

  constructor() { }

  ngOnInit() {
  }

}
