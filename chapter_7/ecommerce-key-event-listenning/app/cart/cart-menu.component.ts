/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {Cart, CartService} from './cart.service';

@Component({
    selector: 'db-cart-menu',
    templateUrl: 'app/cart/cart-menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CartMenuComponent {

    private cart: Cart;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }
}

