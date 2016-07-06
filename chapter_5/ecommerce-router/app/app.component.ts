/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent, ProductComponent} from './product/index';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  precompile: [WelcomeComponent, ProductListComponent, ProductComponent, CartComponent, CheckoutComponent]
})
export class AppComponent {
}
