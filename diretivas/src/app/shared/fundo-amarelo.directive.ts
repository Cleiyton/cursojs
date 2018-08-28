import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {

    //fazendo isso como acessamos a variavel direta no dom o sistema fica vuneravel a ataque do tipo xxs
    //this._elementRef.nativeElement.style.backgroundColor='yellow'
    //console.log(this._elementRef);

    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow')
  }

}
