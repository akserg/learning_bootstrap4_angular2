// Import the decorator class for Component
import { Component } from '@angular/core';
// Import the bootstrap method to load application component
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
}

