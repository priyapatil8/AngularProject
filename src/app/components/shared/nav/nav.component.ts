import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/models/category'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

categoryList: Category;  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getCategory().subscribe(data=>{

    this.categoryList= data;
   })
  }

}
