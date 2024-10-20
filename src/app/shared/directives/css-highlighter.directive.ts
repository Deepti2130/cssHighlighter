import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssHighlighter]'
})
export class CssHighlighterDirective implements OnInit{
  @Input() hovercolor! : string;
  @Input() defaultcolor!:string;
  @Input() padding! :string;

  //tobind the property we need hostbinding
  @HostBinding('style.backgroundColor') bgColor:string = this.defaultcolor
  @HostBinding('style.padding') paddingprop : string = "20px"
  constructor(
    private _eleRef : ElementRef,
    private _rendrer : Renderer2
  ) { }

  ngOnInit(): void {
    // this._eleRef.nativeElement.style.backgroundColor = "green"
    // this._eleRef.nativeElement.style.padding = "20px"
    // this._eleRef.nativeElement.style.color = "white"
    // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", "yellow")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "padding", "30px")
  }

  @HostListener('mouseover', ['$event'])
  onmouseover(eve:any){
    // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", "red")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "padding", "25px")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "color", "white")

    this.bgColor = this.hovercolor
    this.paddingprop = this.padding
  }

  @HostListener('mouseout', ['$event'])
  onmouseout(eve:any){
    // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", "blue")
    this.bgColor = this.defaultcolor
  }




}
