import { Component } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {NavbarComponent} from './shared/navbar/navbar.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  viewProviders: [NavbarComponent]
})
export class AppComponent {}

