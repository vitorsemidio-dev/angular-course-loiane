import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BootstrapModule } from './bootstrap/bootstrap.module';
import * as _ from 'lodash';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BootstrapModule,
    FormsModule,
    DiretivasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
