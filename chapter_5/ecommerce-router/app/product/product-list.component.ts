/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 * */
import {CategoryListComponent} from '../shared/category/index';
import {ProductSearchComponent} from './product-search.component';
import {ProductGridComponent} from './product-grid.component';

/*
 * Components
 */

@Component({
  selector: 'db-products',
  templateUrl: 'app/product/product-list.component.html',
  directives: [ProductSearchComponent, CategoryListComponent, ProductGridComponent]
})
export class ProductListComponent {

  private category: string;
  private search: string;

  constructor(private router: Router) {
    this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.category = params['category'];
        this.search = params['search'];
        console.log('category', this.category, 'search', this.search);
      });
  }
}
