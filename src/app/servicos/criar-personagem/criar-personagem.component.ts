import { Component, OnInit } from '@angular/core';
import { PersonagemService } from './../services/personagem.service';

@Component({
  selector: 'app-criar-personagem',
  templateUrl: './criar-personagem.component.html',
  styleUrls: ['./criar-personagem.component.scss']
})
export class CriarPersonagemComponent implements OnInit {

  personagens;

  constructor(
    private personagemService: PersonagemService,
  ) { }

  ngOnInit() {
    this.personagens = this.personagemService.getPersonagens();
  }

  addPersonagem(newPersonagem) {
    this.personagemService.addPersonagem(newPersonagem);
  }

}
