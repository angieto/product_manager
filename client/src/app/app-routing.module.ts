import { EditComponent } from './products/edit/edit.component';
import { CreationComponent } from './products/creation/creation.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DisplayComponent } from './products/display/display.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: [
        { path: '', component: DisplayComponent, pathMatch: 'full' },
        { path: 'new', component: CreationComponent },
        { path: 'edit/:id', component: EditComponent } 
    ]},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
