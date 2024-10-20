import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective implements OnInit {

  constructor(
    private _eleRef : ElementRef
  ) { }

  ngOnInit(): void {

  }

  //in inputcontrol we type capital but we show in lowercase
  @HostListener('keyup', ['$event'])
  oninput(eve:Event){

    let inputcontrol = eve.target as HTMLInputElement

    let val = inputcontrol.value.toLowerCase()
    console.log(val)

    inputcontrol.value = val;
  }
}
