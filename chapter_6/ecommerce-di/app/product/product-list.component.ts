/*
 * Angular Imports
 */
import {Component} from '@angular/core';

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
export class ProductListComponent {}
