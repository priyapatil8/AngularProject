import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ViewProductCategoryComponent } from './components/shopping-cart/product-list/view-product-category/view-product-category.component';
import { ViewproductComponent } from './components/shopping-cart/product-list/viewproduct/viewproduct.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SerachComponent } from './components/serach/serach.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch:"full"},
 {path: "login", component:LoginComponent},
 {path: "register", component:RegisterComponent},
 {path: "search", component:SerachComponent},
 {path: "check-out", component: CheckOutComponent},
 {path: "cart-item",component:CartItemComponent},
 {path:"cart",component:CartComponent},
 {path: "category/:id", component:ViewProductCategoryComponent},
 {path: "home", component:ProductListComponent},
 {path: "view-product/:id", component: ViewproductComponent},
 {path:"shop", component:ShoppingCartComponent},
 {path: "**", component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
