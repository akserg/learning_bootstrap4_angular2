import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/*
 * Components
 */
import {AppComponent}  from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

import {WelcomeComponent} from './welcome/welcome.component';
import {CategoryListComponent, CategoryTitlePipe, CategoryCardComponent, CategorySlideComponent} from './category/index';
import {ProductListComponent, ProductViewComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent} from './product/index';
import {CartMenuComponent} from './cart/cart-menu.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';

/*
 * Services
 */
import {CategoryService} from './category/category.service';
import {ProductService} from './product/product.service';
import {CartService} from './cart/cart.service';

/*
 * Routing
 */
import {routing}  from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [AppComponent, NavbarComponent, FooterComponent, WelcomeComponent, CategoryListComponent,
    ProductListComponent, ProductViewComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent, 
    CartMenuComponent, CartViewComponent, CategoryCardComponent, CategorySlideComponent, CheckoutViewComponent,
    CategoryTitlePipe],
  providers: [CategoryService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
