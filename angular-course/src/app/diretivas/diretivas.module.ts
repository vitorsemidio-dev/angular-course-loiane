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
import { HighlightDirective } from './highlight.directive';
import { NgIfElse } from './diretiva-ngif/components/ng-if-else.component';
import { NgIfThenElse } from './diretiva-ngif/components/ng-if-then-else.component';
import { NgIfAs } from './diretiva-ngif/components/ng-if-let.component';

const shared = [
  DiretivaNgifComponent,
  DiretivaNgswitchComponent,
  DiretivaNgforComponent,
  DiretivaNgclassComponent,
  DiretivaNgstyleComponent,
  ExemploNgContentComponent,
  DiretivaCustomizadaComponent,
  NgIfElse, NgIfThenElse, NgIfAs,
];

@NgModule({
  declarations: [
    shared,
    BgcolorPokemonDirective,
    BoldMouseDirective,
    HighlightDirective,
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
