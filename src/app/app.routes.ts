import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { productDetailGuard } from './core/guards/product-detail.guard';
import { ObservableDemoComponent } from './pages/demos/observable-demo/observable-demo.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/errors/unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', canActivate: [productDetailGuard] ,component: ProductDetailComponent},
    { path: 'demo/observable', component: ObservableDemoComponent},
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'unauthorized', component: UnauthorizedComponent},
    { path : '**', component: NotFoundComponent }
];
