/*
 * Angular Imports
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*
 * Components Imports
 */
import { Product, ProductService } from './product.service';
import { Cart, CartItem, CartService } from '../cart/cart.service';

@Component({
    moduleId: module.id,
    selector: 'db-product-view',
    templateUrl: './product-view.component.html'
})
export class ProductViewComponent {

    product: Product;
    cartItem: CartItem;

    get quantity(): number {
        return this.cartItem ? this.cartItem.count : 0;
    }

    get amount(): number {
        return this.cartItem ? this.cartItem.amount : 0;
    }

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService) {
        this.route
            .params
            .subscribe((params: any) => {
                // Get the product id
                let id: string = params['id'];
                // Return the product from ProductService
                this.product = this.productService.getProduct(id);
                // Return the cart item
                this.cartItem = this.cartService.findItem(id);
            });
    }

    addToCart($event: Event) {
        this.cartItem = this.cartService.addProduct(this.product);
        $event.preventDefault();
    }

    removeFromCart($event: Event) {
        this.cartItem = this.cartService.removeProduct(this.product);
        $event.preventDefault();
    }
}

