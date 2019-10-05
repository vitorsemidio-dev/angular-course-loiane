import { PersonagensMock } from './personagens-mock.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagens = PersonagensMock;

  constructor() { }

  getPersonagens() {
    return this.personagens;
  }

  addPersonagem(newPersonagem) {
    this.personagens.push(newPersonagem);
  }
}
