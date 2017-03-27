/*
 * Angular Imports
 */
import {Routes} from '@angular/router';

/*
 * Components
 */
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';

/*
 * Routes
 */
export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  //{ path: 'products/:id', component: ProductComponent }
];
