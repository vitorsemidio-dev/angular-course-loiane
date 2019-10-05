import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';


import { PersonagemModule } from './personagem/personagem.module';
import { CriarPersonagemModule } from './criar-personagem/criar-personagem.module';
import { PersonagemService } from './services/personagem.service';

@NgModule({
  declarations: [
    ServicosComponent,
  ],
  imports: [
    CommonModule,
    CriarPersonagemModule,
    PersonagemModule
  ],
  exports: [
    ServicosComponent,
  ],
  providers: [
    PersonagemService,
  ]
})
export class ServicosModule { }
