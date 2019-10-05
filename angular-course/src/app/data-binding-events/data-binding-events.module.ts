import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingEventsComponent } from './data-binding-events.component';

@NgModule({
  declarations: [
    DataBindingEventsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataBindingEventsComponent,
  ]
})
export class DataBindingEventsModule { }
