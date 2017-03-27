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
    moduleId: module.id,
    selector: 'db-product-search',
    templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {

    constructor(private router: Router) {}

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: { search: value} });
    }
}

