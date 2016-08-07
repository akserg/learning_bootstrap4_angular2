/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

/*
 * Components
 */
import {Cart, CartItem, CartService} from './cart.service';
import {CartItemCountComponent} from './cart-item-count.component';

@Component({
    selector: 'db-cart-view',
    templateUrl: 'app/cart/cart-view.component.html',
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class CartViewComponent {

    private cart: Cart;
    form: FormGroup;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
        this.form = this.createForm();
    }

    clearCart() {
        this.cartService.clearCart();
    }

    update($event) {
        console.log($event);
        return $event;
    }

    createForm() {
        let group: any = {};

        this.cart.items.forEach((item: CartItem) => {
            group[item.product.id] =  new FormControl(item.count || '', Validators.required);
        });
        return new FormGroup(group);
    }
}

