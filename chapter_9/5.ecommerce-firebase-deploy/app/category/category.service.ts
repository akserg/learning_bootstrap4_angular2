import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class Category {
    //  Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class CategoryService {

    // URL to Categories web api
    private categoriesUrl = 'categories';
    // We keep categories in cache variable
    private categories: Map<string, Category> = new Map<string, Category>();

    constructor(private db: AngularFireDatabase) { }

    getCategories(): Observable<Category[]> {
        let result = this.db
            .list(this.categoriesUrl)
            .catch(this.handleError);

        result.subscribe((categories: Category[]) => {
            this.categories = new Map<string, Category>();
            categories.forEach((category: Category) => {
                this.categories.set(category.id, category);
            });
        });
        return result
    }

    getCategory(id: string): Category {
        return this.categories.get(id);
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ?
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}
