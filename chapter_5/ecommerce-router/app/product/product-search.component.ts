/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {Product} from './product';

@Component({
    selector: 'db-product-search',
    templateUrl: 'app/product/product-search.component.html'
})
export class ProductSearchComponent {

    constructor(private router: Router) {}

    searchProduct(value: string) {
        console.log('Search Product for', value);
        this.router.navigate(['/products'], { queryParams: { search: value} });
    }
}

