import {Component, Input, AfterContentInit, AfterContentChecked, ContentChild} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
  selector: 'my-parent',
  template: `
  <div class="parent">
    <div class="parent__title">
     {{title}}
    </div>
    <div class="parent__content">
        <ng-content select="child"></ng-content>
    </div>
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `]
})
export class ParentComponent implements AfterContentInit, AfterContentChecked {
  @Input() title: string;

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild('child') 
  contentChild: ChildComponent;

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    console.log('AfterContentInit');
    this.title = 'AfterContentInit';
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.title === this.contentChild.desc) {
      console.log('AfterContentChecked (no change)');
    } else {
      this.contentChild.desc = this.title;
      console.log('AfterContentChecked');
    }
  }
}