/*
 * Angular Imports
 */
import { Routes, RouterModule } from '@angular/router';

/*
 * Components
 */
import { SignInComponent } from './auth/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductViewComponent } from './product/product-view.component';
import { CartViewComponent } from './cart/cart-view.component';
import { CheckoutViewComponent } from './checkout/checkout-view.component';

import { AuthGuardService } from './auth/auth-guard.service';
import { UnAuthGuardService } from './auth/unauth-guard.service';

/*
 * Routes
 */
const routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '', component: SignInComponent, canActivate: [UnAuthGuardService] },
  { path: 'signin', component: SignInComponent, canActivate: [UnAuthGuardService] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuardService] },
  { path: 'products/:id', component: ProductViewComponent, canActivate: [AuthGuardService] },
  { path: 'cart', component: CartViewComponent, canActivate: [AuthGuardService] },
  { path: 'checkout', component: CheckoutViewComponent, canActivate: [AuthGuardService] },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
