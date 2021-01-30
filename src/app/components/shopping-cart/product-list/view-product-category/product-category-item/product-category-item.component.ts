import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-item',
  templateUrl: './product-category-item.component.html',
  styleUrls: ['./product-category-item.component.css']
})
export class ProductCategoryItemComponent implements OnInit {
  searchCategory: Category;

  @Input() productItem: Product;
  constructor(private msg: MessengerService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchCategory=data.categoryId;

    
    })
  }
  

}
