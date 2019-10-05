import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input()
  listaPokemons = ['vazio'];

  @Output()
  pokemonSelecionado: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onPokemonSelecionado(evento) {
    this.pokemonSelecionado.emit(evento);
  }

}
