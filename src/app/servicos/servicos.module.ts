import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { CursosService } from './../introducao/cursos/cursos.service';

@NgModule({
  declarations: [
    ServicosComponent,
    PersonagemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicosComponent,
  ],
  providers: [
    CursosService,
  ]
})
export class ServicosModule { }
