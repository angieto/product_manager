import { EditComponent } from './products/edit/edit.component';
import { CreationComponent } from './products/creation/creation.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DisplayComponent } from './products/display/display.component';
import { DetailComponent } from './products/detail/detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: "full" },
    { path: 'products', component: ProductsComponent, children: [
        { path: '', component: DisplayComponent, pathMatch: 'full' },
        { path: 'new', component: CreationComponent },
        { path: 'edit/:id', component: EditComponent }, 
        { path: ':id', component: DetailComponent },
    ]},
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
