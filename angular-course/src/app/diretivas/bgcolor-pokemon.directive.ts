import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

/* tslint:disable: variable-name directive-selector */

@Directive({
  selector: '[bgcolorPokemon]'
})
export class BgcolorPokemonDirective implements AfterViewInit {
  _colors = {
    eletrico: 'yellow',
    fogo: 'red',
    agua: 'aqua',
  };

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
  ) {

  }

  setColor(atributo) {
    return this._colors[atributo];
  }

  ngAfterViewInit() {
    const atributo = this._elementRef.nativeElement.className;
    const color = this.setColor(atributo) || 'white';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      color
    );
  }

}
