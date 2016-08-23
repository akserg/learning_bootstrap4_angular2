/*
 * Angular Imports
 */
import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'db-product-search',
    templateUrl: 'app/product/product-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent implements OnInit {

    disabled: boolean = true;
    seachControl: FormControl;

    constructor(private router: Router, private changeDetection: ChangeDetectorRef) {}

    ngOnInit() {
        this.seachControl = new FormControl();
        this.seachControl.valueChanges.subscribe((value: string) => {
            this.searchChanged(value);
            this.changeDetection.markForCheck();
        });
    }

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: { search: value} });
    }

    searchChanged(value: string) {
        // Update the disabled property depends on value 
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}

