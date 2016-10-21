import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductGridComponent} from './product-grid.component';

import {ProductService} from './product.service';

import {CategoryModule} from '../category/category.module';

@NgModule({
    imports: [CommonModule, RouterModule, CategoryModule],
    declarations: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent],
    exports: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent],
    providers: [ProductService]
})
export class ProductModule {}
