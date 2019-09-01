import { FormsModule } from '@angular/forms';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';

@NgModule({
  declarations: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
  ]
})
export class DiretivasModule { }
