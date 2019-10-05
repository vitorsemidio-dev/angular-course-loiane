import { PokemonsMock } from './../pokemons-mock.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.scss']
})
export class DiretivaCustomizadaComponent implements OnInit {
  pokemons = PokemonsMock;
  constructor() { }

  ngOnInit() {
  }

}
