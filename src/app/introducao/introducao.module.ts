import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducaoComponent } from './introducao.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    IntroducaoComponent,
    MeuPrimeiroComponent,
  ],
  imports: [
    CommonModule,
    CursosModule
  ],
  exports: [
    IntroducaoComponent,
    // MeuPrimeiroComponent,
    // CursosModule,
  ]
})
export class IntroducaoModule { }
