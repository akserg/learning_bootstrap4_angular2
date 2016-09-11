/*
 * Angular Imports
 */
import {Routes, RouterModule} from '@angular/router';

/*
 * Components
 */
import {SignInComponent} from './auth/sign-in.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductViewComponent} from './product/product-view.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';

import {AuthGuard} from './auth/auth-guard.service';

/*
 * Routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]  },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard]  },
  { path: 'products/:id', component: ProductViewComponent, canActivate: [AuthGuard]  },
  { path: 'cart', component: CartViewComponent, canActivate: [AuthGuard]  },
  { path: 'checkout', component: CheckoutViewComponent, canActivate: [AuthGuard]  },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
