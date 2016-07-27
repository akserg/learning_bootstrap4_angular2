import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Product} from './product';

@Component({
    selector: 'db-product-card',
    templateUrl: 'app/product/product-card.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ProductCardComponent {
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
