/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {Category} from './category';

@Component({
    selector: 'db-category-list',
    templateUrl: 'app/shared/category/category-list.component.html'
})
export class CategoryListComponent {
    @Input() list: Category[];

    @Output() select: EventEmitter<Category> = new EventEmitter<Category>();
}

