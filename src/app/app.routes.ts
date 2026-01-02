import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { productDetailGuard } from './core/guards/product-detail.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', canActivate: [productDetailGuard] ,component: ProductDetailComponent},
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path : '**', component: PageNotFoundComponent }
];
