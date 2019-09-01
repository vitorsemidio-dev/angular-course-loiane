import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  anime = 'Neverland';
  animeLove = true;
  urlImage = 'http://lorempixel.com/400/200/food/';
  classes = ['success', 'info', 'warning', 'danger'];

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

}
