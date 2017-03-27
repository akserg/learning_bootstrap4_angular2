import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Category} from './category';

@Component({
    moduleId: module.id, 
    selector: 'db-category-slide',
    templateUrl: './category-slide.component.html'
})
export class CategorySlideComponent {
    @Input() category: Category;
    @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

    browse() {
        this.select.emit(this.category);
    }
}

