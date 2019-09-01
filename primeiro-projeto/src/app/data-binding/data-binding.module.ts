import { DataBindingComponent } from './data-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    DataBindingComponent,
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
