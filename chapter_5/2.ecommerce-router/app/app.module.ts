import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/**
 * Modules
 */
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';

/*
 * Components
 */
import {AppComponent}  from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';

/*
 * Routes
 */
import {routes}  from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes),
            CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent,
    WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
