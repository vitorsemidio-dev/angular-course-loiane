import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas.component';
import { RotasRoutingModule } from './rotas-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    RotasComponent,
    CursosComponent,
    AlunosComponent,
  ],
  imports: [
    CommonModule,
    RotasRoutingModule,
    CursosModule,
    AlunosModule,
  ],
  exports: [
    RotasComponent,
    RotasRoutingModule
  ]
})
export class RotasModule { }
