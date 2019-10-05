import {
  Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit,
  OnChanges, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  valorInicial = 10;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');

  }

}
