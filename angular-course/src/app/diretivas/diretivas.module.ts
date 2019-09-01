import { FormsModule } from '@angular/forms';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';

@NgModule({
  declarations: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent
  ]
})
export class DiretivasModule { }
