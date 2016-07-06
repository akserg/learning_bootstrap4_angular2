/*
 * Angular Imports
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {provideRouter, RouterConfig} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent, ProductComponent} from './product/index';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

/*
 * Routes
 */
const routes: RouterConfig = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

/*
 * Routes Provider
 */
const APP_ROUTER_PROVIDER = [
    // Installs our routes
    provideRouter(routes)
];

/*
 * Bootstrap out application
 */
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDER,
    // Provide the # based strategy
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
