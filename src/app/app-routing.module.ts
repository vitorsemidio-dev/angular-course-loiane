import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingEventsComponent } from './data-binding-events/data-binding-events.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';

const routes: Routes = [
  { path: 'introducao', component: IntroducaoComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'data-binding-events', component: DataBindingEventsComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
