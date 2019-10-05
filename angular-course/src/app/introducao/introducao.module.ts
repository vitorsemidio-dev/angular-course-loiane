import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducaoComponent } from './introducao.component';

@NgModule({
  declarations: [
    IntroducaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroducaoComponent,
  ]
})
export class IntroducaoModule { }
