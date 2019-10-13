import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularComponent } from './material-angular.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    MaterialAngularComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class MaterialAngularModule { }
