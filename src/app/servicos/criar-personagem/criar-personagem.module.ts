import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPersonagemComponent } from './criar-personagem.component';
import { ReceberPersonagemCriadoComponent } from '../receber-personagem-criado/receber-personagem-criado.component';

// import { PersonagemService } from './../services/personagem.service';

@NgModule({
  declarations: [
    CriarPersonagemComponent,
    ReceberPersonagemCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriarPersonagemComponent
  ],
  // providers: [
  //   PersonagemService,
  // ]
})
export class CriarPersonagemModule { }
