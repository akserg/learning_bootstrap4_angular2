/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

/*
 * Components
 */
import {Category, getCategories} from './category';

@Component({
    selector: 'db-category-list',
    templateUrl: 'app/shared/category/category-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CategoryListComponent {

    categories: Category[] = getCategories();

    @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

    selectCategory(category: Category) {
        console.log(category);
        this.select.emit(category);
    }
}

