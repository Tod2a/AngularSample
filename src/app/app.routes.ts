import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { productDetailGuard } from './core/guards/product-detail.guard';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/errors/unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate: [productDetailGuard], component: ProductDetailComponent },

  // lazy loading, Angular does not import the "demo" bundle untill the user click on a demo route.
  { path: 'demo', loadChildren: () => import('./pages/demos/demos.routes').then((m) => m.demosRoutes) },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent },
];
