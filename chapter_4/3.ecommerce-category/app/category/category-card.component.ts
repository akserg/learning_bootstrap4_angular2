import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Category} from './category';

@Component({
    moduleId: module.id,
    selector: 'db-category-card',
    templateUrl: './category-card.component.html'
})
export class CategoryCardComponent {
    @Input() category: Category;
    @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

    browse() {
        this.select.emit(this.category);
    }
}

