import { PersonagemComponent } from './personagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PersonagemService } from './../services/personagem.service';

@NgModule({
  declarations: [
    PersonagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagemComponent
  ],
  // providers: [
  //   PersonagemService,
  // ]
})
export class PersonagemModule { }
