import {Injectable} from '@angular/core';
// import {Headers, Http, Response} from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Product {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with specialproce
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class ProductService {

    // URL to Products web api
    private productsUrl = 'products'; //app/products'; 

    // constructor(private http: Http) {}
    constructor(private af: AngularFire) {}

    getProducts(category?: string, search?: string): Observable<Product[]> {
        let url = this.productsUrl;
        if (category) {
            url += `/?categoryId=${category}`;
        } else if (search) {
            url += `/?title=${search}`;
        }
        // return this.http
        //     .get(url)
        //     .map((response: Response) => response.json().data as Product[])
        //     .catch(this.handleError);
        return this.af.database
            .list(this.productsUrl)
            .catch(this.handleError);
    }

    getProduct(id: string): Observable<Product> {
        // return this.http
        //     .get(this.productsUrl + `/${id}`)
        //     .map((response: Response) => response.json().data as Product)
        //     .catch(this.handleError);
        return this.af.database
            .object(this.productsUrl + `/${id}`)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ? 
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}
