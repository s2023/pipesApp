import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule ),
  }
];

