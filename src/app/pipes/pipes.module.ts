import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { MangaComponent } from './manga/manga.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    MangaComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PipesComponent,
    CamelCasePipe,
  ],
  providers: [
  ]
})
export class PipesModule { }
