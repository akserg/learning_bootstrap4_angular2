/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {Cart, CartItem, CartService} from './cart.service';
import {CartItemCountComponent} from './cart-item-count.component';

@Component({
    selector: 'db-cart-view',
    templateUrl: 'app/cart/cart-view.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CartViewComponent {

    private cart: Cart;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }

    clearCart() {
        this.cartService.clearCart();
    }

    update(value, item: CartItem) {
        let res = value - item.count;
        if (res > 0) {
            for (let i = 0; i < res; i++) {
                this.cartService.addProduct(item.product);
            }
        } else if (res < 0) {
            for (let i = 0; i < -res; i++) {
                this.cartService.removeProduct(item.product);
            }
        }
        return value;
    }
}

