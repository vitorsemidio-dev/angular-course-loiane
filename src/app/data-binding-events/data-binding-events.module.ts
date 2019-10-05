import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingEventsComponent } from './data-binding-events.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  declarations: [
    DataBindingEventsComponent,
    CicloComponent
  ],
  imports: [
    CommonModule,
    DataBindingModule,
  ],
  exports: [
    DataBindingEventsComponent,
  ]
})
export class DataBindingEventsModule { }
