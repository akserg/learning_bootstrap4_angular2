import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class NgInit {
  @Input() ngInit: any;

  ngOnInit() {
    if(this.ngInit) { 
        this.ngInit(); 
    }
  }
}