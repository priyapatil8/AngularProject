import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
//import {CartItem} from 'src/app/models/cart-item';
//import { baseUrl } from '../config/api';
//import {cartUrl} from '../config/api';
//import { Product } from '../models/product';

//const cartUrl = "http://localhost:8082/api/v1/orderdetail";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  // postCartItems(cartItemBody):Observable<CartItem[]>{
  // todo mapping the obtained result to our CartItem properties. pipe and map() used
   // const cartUrl = "http://localhost:8082/api/v1/addcart";
  // return this.http.post<CartItem[]>(cartUrl,cartItemBody);

 // }
    getCartItems():Observable<CartItem[]>{
      
     // todo mapping the obtained result to our CartItem properties. pipe and map() used
      const cartUrl ="http://localhost:8082/api/v1/Getallcarts";
      return this.http.get<CartItem[]>(cartUrl);
    }
   

 addProductToCart(product:Product): Observable<any>{
 const cartUrl = "http://localhost:8082/api/v1/addcart";
   return this.http.post(cartUrl,{product});
  }

  

}
