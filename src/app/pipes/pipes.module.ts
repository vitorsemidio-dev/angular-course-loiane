import { NgModule } from '@angular/core';
// import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CommonModule, registerLocaleData } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { MangaComponent } from './manga/manga.component';
import { CamelCasePipe } from './camel-case.pipe';
// import localePt from '@angular/common/locales/pt';

// registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    PipesComponent,
    MangaComponent,
    CamelCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
    CamelCasePipe,
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    //   // useClass: '',
    //   // useFactory: '',
    // }
  ]
})
export class PipesModule { }
