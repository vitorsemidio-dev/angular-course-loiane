import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  reference = [
    'https://valor-software.com/ngx-bootstrap/#/alerts',
    'https://developer.mozilla.org/pt-BR/docs/Web/Events',
  ];

  anime = 'Neverland';
  animeLove = true;
  urlImage = 'http://lorempixel.com/400/200/food/';
  classes = ['success', 'info', 'warning', 'danger'];
  valorAtual = '';
  valorSalvo = '';
  @ViewChild('input', {static: true}) inputVC;
  isMouseOver = false;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    console.log(1);
    return 1;
  }

  onSelectClass(classe) {
    console.log(classe);
  }

  botaoClicado() {
    console.log('Clicou no botao');
  }

  onKeyUp(evento: KeyboardEvent) {
    const target = evento.target as HTMLInputElement;
    const { value } = target;
    this.valorAtual = value;
  }

  salvarValor(valorSalvo) {
    this.valorSalvo = valorSalvo;
  }

  salvarViewChild() {
    this.inputVC = 'blur';
  }

  toggleMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

}
