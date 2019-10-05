import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPersonagemComponent } from './criar-personagem.component';
import { PersonagemService } from './../services/personagem.service';

@NgModule({
  declarations: [
    CriarPersonagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriarPersonagemComponent
  ],
  providers: [
    PersonagemService
  ]
})
export class CriarPersonagemModule { }
