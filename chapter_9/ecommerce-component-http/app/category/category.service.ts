import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
    private categoriesUrl = 'app/categories'; 
    // URL to Category web api
    private categoryUrl = 'app/category';
    // We keep categories in cache variable
    private categories: Category[];

    constructor(private http: Http) {}

    getCategories(): Promise<Category[]> {
        if (this.categories) {
            return Promise.resolve(this.categories);
        } else {
            return this.http
                .get(this.categoriesUrl)
                .toPromise()
                .then((response: Response) => {
                    this.categories = response.json().data as Category[];
                    return this.categories;
                })
                .catch(this.handleError);
        }
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        throw new CategoryNotFoundException(`Category ${id} not found`);
    }

    private handleError(error: any): Promise<any> {
        window.alert(`An error occurred: ${error}`);
        return Promise.reject(error.message || error);
    }
}

export class CategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}
