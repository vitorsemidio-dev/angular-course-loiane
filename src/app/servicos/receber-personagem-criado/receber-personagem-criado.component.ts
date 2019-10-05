import { PersonagemService } from './../services/personagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-personagem-criado',
  templateUrl: './receber-personagem-criado.component.html',
  styleUrls: ['./receber-personagem-criado.component.scss']
})
export class ReceberPersonagemCriadoComponent implements OnInit {

  personagem: string;

  constructor(
    private personagemService: PersonagemService,
  ) { }

  ngOnInit() {
    this.personagemService.emitirPersonagemCriado.subscribe(
      personagemCriado => this.personagem = personagemCriado
    );
  }

}
