import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  const apiUrl = "http://localhost:8082/api/v1/getproducts";
    return this.http.get<Product[]>(apiUrl);
  }

  viewProduct():Observable<Product[]>{
  const apiUrl = "http://localhost:8082/api/v1/findproduct/";
  return this.http.get<Product[]>(apiUrl);
  }

 SearchCategoryProduct(categoryId) :Observable<Product[]>{
  const apiUrl = "http://localhost:8082/api/v1/getproducts/category="+categoryId;
  return this.http.get<Product[]> (apiUrl);
 }

 getCategory(){
   const categoryUrl="http://localhost:8082/api/v1/getCategories";
   return this.http.get<Category>(categoryUrl);

 }


}

