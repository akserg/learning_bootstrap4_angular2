/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent],
  precompile: [WelcomeComponent, ProductListComponent]
})
export class AppComponent {
}
