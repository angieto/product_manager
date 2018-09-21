import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    productId;
    updatedProduct = {
        name: "",
        qty: 0,
        price: 0
    }
    selectedProduct;
    wrongInput;

    constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.productId = params.id;
            console.log("This is the id selected:", this.productId);
        });
        this.getProduct();
    }

    goHome() {
        this._router.navigate(['/']);
    }

    getProduct() {
        let obs = this._httpService.getProduct(this.productId);
        obs.subscribe(product => {
            this.selectedProduct = product;
            console.log("Service got you product:", this.selectedProduct);
            // price doesn't show up for some reasons...
            // reassign selectedProduct's values to updatedProduct
            // working on finding the error
            this.updatedProduct = {
                name : this.selectedProduct['name'],
                qty: this.selectedProduct['qty'],
                price: this.selectedProduct['price']
            }
        })
    }

    deleteProduct(id) {
        let obs = this._httpService.deleteProduct(this.productId);
        obs.subscribe(product => {
            console.log("Your product is deleted", product);
        });
        this.goHome();
    }
}
