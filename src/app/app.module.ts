import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ViewProductCategoryComponent } from './components/shopping-cart/product-list/view-product-category/view-product-category.component';
import { ViewproductComponent } from './components/shopping-cart/product-list/viewproduct/viewproduct.component';
import { ProductCategoryItemComponent } from './components/shopping-cart/product-list/view-product-category/product-category-item/product-category-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SerachComponent } from './components/serach/serach.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
   CartComponent,
    CartItemComponent,
    ProductListComponent,
    ProductItemComponent,
   ViewProductCategoryComponent,
   ViewproductComponent,
   ProductCategoryItemComponent,
   LoginComponent,
   RegisterComponent,
   PageNotFoundComponent,
   CheckOutComponent,
   SerachComponent,
   
   ],
  
   imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
