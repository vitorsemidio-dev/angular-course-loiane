import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exibir = true;
  valor = 0;

  @ViewChild('input', {static: true}) inputVC: ElementRef;

  setValor() {
    this.valor = this.inputVC.nativeElement.value;
    console.log(this.inputVC.nativeElement.value);
  }
}
