import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FontAwesomeModule } from 'ngx-icons';
import * as _ from 'lodash';
import { DiretivasModule } from './diretivas/diretivas.module';
import { IntroducaoModule } from './introducao/introducao.module';
import { DataBindingEventsModule } from './data-binding-events/data-binding-events.module';
import { MenuComponent } from './menu/menu.component';
import { ServicosModule } from './servicos/servicos.module';
import { PipesModule } from './pipes/pipes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BootstrapModule,
    FormsModule,
    DiretivasModule,
    FontAwesomeModule,
    IntroducaoModule,
    DataBindingEventsModule,
    ServicosModule,
    PipesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
      // useClass: '',
      // useFactory: '',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
