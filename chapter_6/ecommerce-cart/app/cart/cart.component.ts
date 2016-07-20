/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {CartModel} from './cart.service';

@Component({
    selector: 'db-cart',
    templateUrl: 'app/cart/cart.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CartComponent {

    constructor(private cart: CartModel) { }
}

