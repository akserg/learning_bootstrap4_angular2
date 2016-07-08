/*
 * Angular Imports
 */
import {Component} from '@angular/core';

/*
 * Components
 */
import {Product, getProducts} from './product';

@Component({
    selector: 'db-product-grid',
    templateUrl: 'app/product/product-grid.component.html'
})
export class ProductGridComponent {
    products: Product[] = [];
    productsInLastRow: Product[] = [];

    constructor() {
        this.products = getProducts();
        let num = this.products.length;
        let productsInGrid = Math.ceil(num / 3);
        let productsInLastRow = this.products.length - productsInGrid;
        // Copy products in last row of grid
        productsInLastRow
    }
}

