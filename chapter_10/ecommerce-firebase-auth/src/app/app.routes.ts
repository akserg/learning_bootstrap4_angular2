/*
 * Angular Imports
 */
import { Routes, RouterModule } from "@angular/router";

/*
 * Components
 */
import { AuthGuard } from './auth/auth.module';
import { UnauthGuard } from './auth/auth.module';
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignInComponent} from './auth/sign-in.component'
import { ProductListComponent } from "./product/product-list.component";
import { ProductViewComponent } from "./product/product-view.component";
import { CartViewComponent } from "./cart/cart-view.component";
import { CheckoutViewComponent } from "./checkout/checkout-view.component";

/*
 * Routes
 */
const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: "sign-in", component: SignInComponent, canActivate: [UnauthGuard] },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductViewComponent },
  { path: "cart", component: CartViewComponent },
  { path: "checkout", component: CheckoutViewComponent },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
