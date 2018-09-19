import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    showProducts() {
        return this._http.get('/api/products');
    }

    getProduct(id) {
        return this._http.get('/api/products/'+id);
    }

    createProduct(product) {
        return this._http.post('/api/products', product);
    }

    updateProduct(id, product) {
        return this._http.put('/api/products/'+id, product);
    }

    deleteProduct(id) {
        return this._http.delete('/api/products/'+id);
    }

}
