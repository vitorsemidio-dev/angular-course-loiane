import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding-events',
  templateUrl: './data-binding-events.component.html',
  styleUrls: ['./data-binding-events.component.scss']
})
export class DataBindingEventsComponent implements OnInit {
  exibir = true;
  valor = 0;

  @ViewChild('input', {static: true}) inputVC: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  setValor() {
    this.valor = this.inputVC.nativeElement.value;
    console.log(this.inputVC.nativeElement.value);
  }

}
