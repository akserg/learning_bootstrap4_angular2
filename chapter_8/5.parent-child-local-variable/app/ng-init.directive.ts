import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class NgInit implements OnInit {
  @Input() ngInit: any;

  ngOnInit() {
    if(this.ngInit) { 
        this.ngInit(); 
    }
  }
}