import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingEventsComponent } from './data-binding-events/data-binding-events.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  { path: 'introducao', component: IntroducaoComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'data-binding-events', component: DataBindingEventsComponent },
  { path: 'servicos', component: ServicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
