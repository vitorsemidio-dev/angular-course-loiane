import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private listaCursos = ['Java', 'JavaScript', 'Angular', 'React'];

  constructor() { }

  getCursos(): string[] {
    return [...this.listaCursos];
  }

  adicionarCurso(newCurso: string) {
    this.listaCursos.push(newCurso);
  }
}
