import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
    newProduct: any = {
        id: Math.floor(Math.random() * 100) + 1,
        name: "",
        qty: 0,
        price: 0,
    }
    wrongInput;

    productForm: FormGroup;

    constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.productForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            qty: ['', [Validators.required, Validators.min(0)]],
            price: ['', [Validators.required, Validators.min(0)]]
        })
    }

    createProduct(product) {
        let obs = this._httpService.createProduct(this.newProduct);
        obs.subscribe(newProduct => {
            if (newProduct['errors']) {
                console.log("Invalid input", newProduct);
                this.wrongInput = newProduct['errors'];
            } else {
                console.log("Product is added!", newProduct);
                this._router.navigate(['/']);
            }
        });
        this.newProduct = {         
            id: Math.floor(Math.random() * 100) + 1,
            name: "",
            qty: 0,
            price: 0,
        }
    }



}
