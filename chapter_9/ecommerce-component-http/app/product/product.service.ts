import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
    private productsUrl = 'app/products'; 

    constructor(private http: Http) {}

    getProducts(category?: string, search?: string): Promise<Product[]> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then((response: Response) => {
                let products: Product[] = response.json().data as Product[];
                if (category) {
                    // Filter by category id
                    return products.filter((product: Product, index: number, array: Product[]) => {
                        return product.categoryId === category;
                    });
                } else if (search) {
                    // Filter by search string
                    let lowSearch = search.toLowerCase();
                    return products.filter((product: Product, index: number, array: Product[]) => {
                        return product.title.toLowerCase().indexOf(lowSearch) != -1;
                    });
                } else {
                    // Return all as is
                    return products;
                }
            })
            .catch(this.handleError);
    }

    getProduct(id: string): Promise<Product> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then((response: Response) => {
                let products: Product[] = response.json().data as Product[];
                return products.find((product: Product) => product.id === id);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        window.alert(`An error occurred: ${error}`);
        return Promise.reject(error.message || error);
    }
}

export class ProductNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}