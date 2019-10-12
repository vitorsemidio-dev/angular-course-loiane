import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { MangaComponent } from './manga/manga.component';
import { CamelCasePipe } from './camel-case.pipe';

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
  ]
})
export class PipesModule { }
