/*
 * Angular Imports
 */
import {Component} from '@angular/core';

/*
 * Components
 */
import {Category, CategoryService} from '../category/category.service';

@Component({
  moduleId: module.id,
  selector: 'db-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  // Slide Categories
  slideCategories: Category[];

  // Card categories
  cardCategories: Category[];

  constructor(private categoryServics:CategoryService) {
    this.slideCategories = [
      this.categoryServics.getCategory('1'),
      this.categoryServics.getCategory('2'),
      this.categoryServics.getCategory('3')
    ];
    this.cardCategories = this.categoryServics.getCategories();
  }

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}

