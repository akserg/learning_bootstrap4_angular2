/*
 * Angular Imports
 */
import {Component, provide} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';

import {CategoryService} from './category/category.service';
import {ProductService} from './product/product.service';
import {CartService} from './cart/cart.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent],
  precompile: [WelcomeComponent, ProductListComponent],
  providers: [CategoryService, ProductService, CartService]
})
export class AppComponent {
}
