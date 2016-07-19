import {Injectable} from '@angular/core';

import {Product} from '../product/product.service';

export interface CartItem {
    product: Product;
    count:  number;
    amount: number;
}

@Injectable()
export class CartModel {
    count: number = 0;
    amount: number = 0;
    items: CartItem[] = [];
}

@Injectable()
export class CartService {

    constructor(private model: CartModel) {}

    /**
     * This method adds the new product or increases the number
     * of the same products in the cart.
     * It updates the amount and count of items in the cart.
     */
    addProduct(product: Product) {
        // Find CartItem in items
        let item: CartItem = this.findItem(product.id);
        // Check was product found?
        if (item) {
            // Item was found.
            // Increase the count of the same products
            item.count++;
            // Increase amount of the same products
            item.amount += product.price;
        } else {
            // Item was not found.
            // Create the cart item
            item = {
                product: product,
                count: 1,
                amount: product.price
            };
            // Add item to items
            this.model.items.push(item);
        }
        // Increase count in the cart
        this.model.count++;
        // Increase ammount in the cart
        this.model.amount += product.price;
    }

    /**
     * This method decreases the number of the same products
     * in the cart or removes the last product.
     * It updates the amount and count of items in the cart.
     */
    removeProduct(product: Product) {
        // Find CartItem in items
        let item: CartItem = this.findItem(product.id);
        // Check is item found?
        if (item) {
            // Decrease the count
            item.count--;
            // Check was that the last product?
            if (!item.count) {
                // It was last product
                // Delete item from items
                this.remove(item);
            }
            // Decrease count in the cart
            this.model.count--;
            // Decrease ammount in the cart
            this.model.amount -= product.price;
        }
    }

    /**
     * Remove item from the cart.
     * It updates the amount and count of items in the cart.
     */
    removeItem(item: CartItem) {
        // Delete item from items
        this.remove(item);
        // Decrease count in the cart
        this.model.count -= item.count;
        // Decrease ammount in the cart
        this.model.amount -= item.amount;
    }

    /**
     * This method returns cart item by product id or null.
     */
    private findItem(id: string): CartItem {
        for (let i = 0; i < this.model.items.length; i++) {
            if (this.model.items[i].product.id === id) {
                return this.model.items[i];
            }
        }
        return null;
    }

    /**
     * This method removes existing cart item.
     */
    private remove(item: CartItem) {
        // Find the index of product
        let indx: number = this.model.items.indexOf(item);
        // Check was item found
        if (indx !== -1) {
            // Remove element from array
            this.model.items.splice(indx, 1);
        }
    }
}