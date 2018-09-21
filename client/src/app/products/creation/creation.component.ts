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
        // id = math.floor(math.random() * 100) + 1,
        name: "",
        qty: 0,
        price: 0,
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
                this._router.navigate(['/']);
            }
        });
        this.newProduct = { name: "", qty: 0, price: 0 };
    }

    // counter(name) {
    //     var ret = db.counters.findAndModify({query:{_id:name}, update:{$inc : {next:1}}, “new”:true, upsert:true});
    //     // ret == { “_id” : “users”, “next” : 1 }
    //     return ret.next;
    // }

}
