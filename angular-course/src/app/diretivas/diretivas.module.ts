import { FormsModule } from '@angular/forms';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DiretivaNgifComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DiretivaNgifComponent,
  ]
})
export class DiretivasModule { }
