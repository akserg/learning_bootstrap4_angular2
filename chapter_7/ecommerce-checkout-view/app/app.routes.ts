/*
 * Angular Imports
 */
import {provideRouter, RouterConfig} from '@angular/router';

/*
 * Components
 */
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductViewComponent} from './product/product-view.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';

/*
 * Routes
 */
const routes: RouterConfig = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'checkout', component: CheckoutViewComponent },
];

/*
 * Routes Provider
 */
export const APP_ROUTER_PROVIDER = [
    // Installs our routes
    provideRouter(routes)
];
