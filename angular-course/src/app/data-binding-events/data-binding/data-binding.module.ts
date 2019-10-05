import { DataBindingComponent } from './data-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';

import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
  ],
  exports: [
    DataBindingComponent,
  ]
})
export class DataBindingModule { }
