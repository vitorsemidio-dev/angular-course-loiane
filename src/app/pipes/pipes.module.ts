import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { MangaComponent } from './manga/manga.component';

@NgModule({
  declarations: [
    PipesComponent,
    MangaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
  ]
})
export class PipesModule { }
