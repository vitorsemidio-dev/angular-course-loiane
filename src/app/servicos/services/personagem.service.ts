import { Injectable } from '@angular/core';
import { PersonagensMock } from './personagens-mock.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagens = [...PersonagensMock];

  constructor() {
    console.log('PersonagemService');
  }

  getPersonagens() {
    return this.personagens;
  }

  addPersonagem(newPersonagem) {
    this.personagens.push(newPersonagem);
  }
}
