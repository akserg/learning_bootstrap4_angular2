/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';

/*
 * Components
 */
import {Cart, CartItem, CartService} from './cart.service';

@Component({
    moduleId: module.id,
    selector: 'db-cart-view',
    templateUrl: './cart-view.component.html'
})
export class CartViewComponent {

    cart: Cart;

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

