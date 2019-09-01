import { FormsModule } from '@angular/forms';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';

const shared = [
  DiretivaNgifComponent,
  DiretivaNgswitchComponent,
  DiretivaNgforComponent,
  DiretivaNgclassComponent,
];

@NgModule({
  declarations: [
    shared
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    shared
  ]
})
export class DiretivasModule { }
