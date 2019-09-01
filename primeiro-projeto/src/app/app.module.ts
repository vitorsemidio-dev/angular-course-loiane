import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
