import {
  Directive, HostListener, HostBinding,
} from '@angular/core';

/* tslint:disable: directive-selector */

@Directive({
  selector: '[boldMouse]'
})
export class BoldMouseDirective {
  @HostBinding('style.fontWeight') fontWeight: string;
  // private fontWeight: string;
  // @HostBinding('style.fontWeight') get setFontWeight() {
  //   return this.fontWeight;
  // }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.fontWeight = 'bold';
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.fontWeight = 'normal';
  }

  constructor(
  ) { }

}
