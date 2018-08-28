import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';
import { SelectControlValueAccessor } from '../../../node_modules/@angular/forms';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {

    /* this._render.setElementStyle(
       this._elementRef.nativeElement, 'background-color', 'yellow'
     );*/

    this.backgroundColor = 'yellow'

  }

  @HostListener('mouseleave') onMouseLeave() {

    /*this._render.setElementStyle(
    this._elementRef.nativeElement, 'background-color', 'white'
  );*/
    this.backgroundColor= 'white'
  }


  //@HostBinding('style.backgroundColor') bakcgroudnColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    //codigo extra 
    return this.backgroundColor;
  }

  private backgroundColor: string;
  constructor(//private _elementRef: ElementRef,
    //private _render: Renderer
  ) {


  }

}
