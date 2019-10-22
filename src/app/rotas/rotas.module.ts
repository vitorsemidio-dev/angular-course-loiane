import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas.component';
import { RotasRoutingModule } from './rotas-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    RotasComponent,
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
