import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    productList = [];

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.showProducts();
    }

    showProducts() {
        let obs = this._httpService.showProducts();
        obs.subscribe((products: any) => {
            console.log("Serive got you all products", products);
            this.productList = products;
        })
    }

    deleteProduct(id) {
        let obs = this._httpService.deleteProduct(id);
        obs.subscribe(product => {
            console.log("Your product is deleted", product);
        });
        this.showProducts();
    }
}
