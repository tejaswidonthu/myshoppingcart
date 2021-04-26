import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './productList/productDetails/productDetails.component';
import { ProductListComponent } from './productList/productList.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ProductListComponent,
  children: [{path: ':id', component:  ProductDetailsComponent}]},
  {path: 'toys', component: ProductListComponent,
  children: [{path: ':id', component:  ProductDetailsComponent}]},
  {path: 'books', component: ProductListComponent,
  children: [{path: ':id', component:  ProductDetailsComponent}]},
  {path: 'auth', component: AuthComponent},
  {path: 'cart', component: CartComponent},  
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
