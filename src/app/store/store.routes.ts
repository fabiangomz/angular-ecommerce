import { Routes } from '@angular/router';
import { StoreLayoutComponent } from './layouts/store-layout/store-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';

export const storeRoutes: Routes = [
  {
    path: '',
    component: StoreLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'genre/:genre',
        component: GenrePageComponent,
      },
      {
        path: 'product/:idSlug',
        component: ProductPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeRoutes;
