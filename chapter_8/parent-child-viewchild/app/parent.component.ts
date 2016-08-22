import {Component, Input, AfterViewInit, ViewChild} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
  selector: 'my-parent',
  template: `
  <div class="parent">
    <div class="parent__title">
     {{title}}
    </div>
    <div class="parent__content">
        <my-child></my-child>
    </div>
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `]
})
export class ParentComponent implements AfterViewInit {
  @Input() title: string;

  @ViewChild(ChildComponent)
  private child: ChildComponent;

  ngAfterViewInit() {
    this.child.desc = "You are mine";
  }
}