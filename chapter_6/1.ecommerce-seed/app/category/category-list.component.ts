/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {Category, getCategories} from './category';

@Component({
    moduleId: module.id,
    selector: 'db-category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent {

    categories: Category[] = getCategories();

    constructor(private router: Router) {}

    filterProducts(category: Category) {
        this.router.navigate(['/products'], { queryParams: { category: category.id} });
    }
}

