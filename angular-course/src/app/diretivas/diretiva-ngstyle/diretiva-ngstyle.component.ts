import { Pokemon } from './../pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {
  pokemons: Pokemon[] = [
    { nome: 'pikachu', atributo: 'eletrico' },
    { nome: 'charmander', atributo: 'fogo' },
    { nome: 'squirtle', atributo: 'agua' },
  ];

  selecionado = '';

  constructor() { }

  ngOnInit() {
  }

}
