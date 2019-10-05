import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

/* tslint:disable: directive-selector */

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';


  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
