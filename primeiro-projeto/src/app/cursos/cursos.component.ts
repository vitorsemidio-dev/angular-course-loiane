import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  listaCursos: string[] = [];

  constructor(
    private cursoService: CursosService,
  ) { }

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.listaCursos = this.cursoService.getCursos();
  }

  adicionarCurso(curso: string) {
    this.cursoService.adicionarCurso(curso);
    this.carregarDados();
  }

}
