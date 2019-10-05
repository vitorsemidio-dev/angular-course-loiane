import { Injectable, EventEmitter } from '@angular/core';
import { PersonagensMock } from './personagens-mock.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  static criouNovoPersonagem = new EventEmitter<any>();

  emitirPersonagemCriado = new EventEmitter<any>();

  private personagens = [...PersonagensMock];

  constructor() {
    console.log('PersonagemService');
  }

  getPersonagens() {
    return this.personagens;
  }

  addPersonagem(newPersonagem) {
    this.personagens.push(newPersonagem);
    this.emitirPersonagemCriado.emit(newPersonagem);
    PersonagemService.criouNovoPersonagem.emit(newPersonagem);
  }
}
