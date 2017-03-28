/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'db-product-search',
    templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {

    disabled: boolean = true;

    constructor(private router: Router) {}

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: { search: value} });
    }

    searchChanged(value: string) {
        // Update the disabled property depends on value 
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}

