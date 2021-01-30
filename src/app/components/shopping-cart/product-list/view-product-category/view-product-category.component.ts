import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product-category',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.css']
})
export class ViewProductCategoryComponent implements OnInit {
  productList : Product[]=[]
  searchCategory: Category;
  msg: any;
  productItem: any;
  constructor(private activatedRoute: ActivatedRoute,
              private messengerService: MessengerService ,
              private productService: ProductService   ) { }

  ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe(data=>{
  this.searchCategory = data.id;

  this.productService.SearchCategoryProduct(this.searchCategory).subscribe(categoryData=>{

    this.productList= categoryData;
  })

  })
   
  }
  handleAddToCart(){
   
    this.msg.sendMsg(this.productItem)
  }

}
