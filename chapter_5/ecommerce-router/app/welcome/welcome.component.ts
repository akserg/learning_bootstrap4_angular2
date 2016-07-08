/*
 * Angular Imports
 */
import {Component} from '@angular/core';

/*
 * Components
 */
import {Category, CategoryCardComponent, CategorySlideComponent, getCategories, getCategory} from '../shared/category/index';

@Component({
  selector: 'db-welcome',
  templateUrl: 'app/welcome/welcome.component.html',
  directives: [CategoryCardComponent, CategorySlideComponent]
})
export class WelcomeComponent {
  // Slide Categories
  slideCategories: Category[] = [getCategory('1'), getCategory('2'), getCategory('3')];

  // Card categories
  cardCategories: Category[] = getCategories();

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}

