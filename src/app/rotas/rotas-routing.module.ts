import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'rotas/cursos', component: CursosComponent },
  { path: 'rotas/alunos', component: AlunosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotasRoutingModule { }
