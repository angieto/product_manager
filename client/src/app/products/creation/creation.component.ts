import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
    newProduct: any = {
        title: "",
        price: 0,
        url: ""
    }
    wrongInput;

    constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {
    }

    createProduct(product) {
        let obs = this._httpService.createProduct(this.newProduct);
        obs.subscribe(newProduct => {
            if (newProduct['errors']) {
                console.log("Invalid input", newProduct);
                this.wrongInput = newProduct['errors'];
            } else {
                console.log("Product is added!", newProduct);
            }
        });
        this.newProduct = { title: "", price: 0, url: ""};
    }

}
