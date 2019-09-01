import { FormsModule } from '@angular/forms';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { BgcolorPokemonDirective } from './bgcolor-pokemon.directive';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';
import { BoldMouseDirective } from './bold-mouse.directive';

const shared = [
  DiretivaNgifComponent,
  DiretivaNgswitchComponent,
  DiretivaNgforComponent,
  DiretivaNgclassComponent,
  DiretivaNgstyleComponent,
  ExemploNgContentComponent,
  DiretivaCustomizadaComponent
];

@NgModule({
  declarations: [
    shared,
    BgcolorPokemonDirective,
    BoldMouseDirective,
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
