import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    productId;
    updatedProduct = {
        title: "",
        price: 0,
        url: ""
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
                title : this.selectedProduct['title'],
                price: this.selectedProduct['price'],
                url: this.selectedProduct['url']
            }
        })
    }

    updateProduct() {
        let obs = this._httpService.updateProduct(this.productId, this.updatedProduct);
        obs.subscribe(updatedProduct => {
            if (updatedProduct['errors']) {
                console.log("Service couldn't update", updatedProduct);
                this.wrongInput = updatedProduct;
            } else
                console.log("Product got updated!", updatedProduct);
                this.goHome();
        });
    }
}
