import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("appHighLight") highLightColor: string | undefined;

  private _defaultColor = 'red';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._el.nativeElement, "color", this._defaultColor);
   }

   // mise en place de l'événement d'écoute ave cun console.log
  //  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
  //    console.log('mouseenter');
  //    console.log(event);     
  //  }

  //  @HostListener('mouseleave', ['$event']) onMouseleave(event: Event) {
  //    console.log('mouseleave');
  //    console.log(event);     
  //  }

   @HostListener('mouseenter') onMouseEnter() {
     this._renderer.setStyle(this._el.nativeElement, 'color', this.highLightColor);
    }
    
    @HostListener('mouseleave') onMouseleave() {
     this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
   }


}
