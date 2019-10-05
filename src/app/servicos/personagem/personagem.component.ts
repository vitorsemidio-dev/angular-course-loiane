import { Component, OnInit } from '@angular/core';
import { PersonagemService } from './../services/personagem.service';
@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss'],
  providers: [PersonagemService],
})
export class PersonagemComponent implements OnInit {

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