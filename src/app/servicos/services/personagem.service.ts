import { Injectable, EventEmitter } from '@angular/core';
import { PersonagensMock } from './personagens-mock.model';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  static criouNovoPersonagem = new EventEmitter<any>();

  emitirPersonagemCriado = new EventEmitter<any>();

  private personagens = [...PersonagensMock];

  constructor(
    private logService: LogService,
  ) {
    console.log('PersonagemService');
  }

  getPersonagens() {
    this.logService.log('Obtendo lista de personagens');
    return this.personagens;
  }

  addPersonagem(newPersonagem) {
    this.logService.log(`Criando novo personagem: ${newPersonagem}`);
    this.personagens.push(newPersonagem);
    this.emitirPersonagemCriado.emit(newPersonagem);
    PersonagemService.criouNovoPersonagem.emit(newPersonagem);
  }
}
