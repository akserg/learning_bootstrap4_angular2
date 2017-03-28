/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';

/*
 * Components
 */
import {Cart, CartItem, CartService} from './cart.service';

@Component({
    selector: 'db-cart-view',
    templateUrl: 'app/cart/cart-view.component.html'
})
export class CartViewComponent {

    private cart: Cart;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }

    clearCart() {
        this.cartService.clearCart();
    }

    update(value: number, item: CartItem) {
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

