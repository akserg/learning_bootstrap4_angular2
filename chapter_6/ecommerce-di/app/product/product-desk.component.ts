/*
 * Angular Imports
 */
import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {Product} from './product';

@Component({
    selector: 'db-product-desk',
    templateUrl: 'app/product/product-desk.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ProductDeskComponent {
    @Input() products: Product[];

    setClasses(product: Product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    }

    buy(product: Product) {
        console.log('We bought', product.title);
    }
}

