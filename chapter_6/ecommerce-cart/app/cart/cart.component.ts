/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {CartItem, CartService} from './cart.service';

@Component({
    selector: 'db-cart',
    templateUrl: 'app/cart/cart.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CartComponent {
    cartCount: number = 0;
    cartAmount: number = 0;
    cartItems: CartItem[] = [];

    constructor(private cartService: CartService) {
        this.cartCount = this.cartService.getCount();
        this.cartAmount = this.cartService.getAmount();
        this.cartItems = this.cartService.getItems();
    }
}

