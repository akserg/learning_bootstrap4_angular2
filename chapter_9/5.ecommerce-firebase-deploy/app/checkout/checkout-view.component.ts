/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/*
 * Components
 */
import {Cart, CartItem, CartService} from '../cart/cart.service';
import {CartItemCountComponent} from '../cart/cart-item-count.component';

@Component({
    moduleId: module.id,
    selector: 'db-checkout-view',
    templateUrl: './checkout-view.component.html'
})
export class CheckoutViewComponent {

    cart: Cart;
    form: FormGroup;

    constructor(private cartService: CartService, private fb: FormBuilder) {
        this.cart = this.cartService.cart;
    }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: []
        }); 
    }

    submit() {
        alert('Submitted');
        this.cartService.clearCart();
    }
}

