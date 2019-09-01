import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
  exports: [
    BootstrapComponent,
  ]
})
export class BootstrapModule { }
