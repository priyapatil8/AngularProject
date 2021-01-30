import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import {CartItem} from 'src/app/models/cart-item'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1, productId:2,  productName: 'Ginger Tea', qty:4, productPrice:10},
    // {id:2, productId:3,  productName: 'Sage tea', qty:2, productPrice:20},
    //{id:3, productId:7,  productName: 'Rose hip tea', qty:1, productPrice:10},
    // {id:4, productId:1,  productName: 'Rooibos', qty:3, productPrice:20}

  ];
  cartTotal = 0
  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
})

  
    
  }
  addProductToCart(product: Product) {
    let productExists = false
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.productId) {
        this.cartItems[i].qty++
        productExists = true
        break;
     }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.productId,
        productName: product.productName,
        qty: 1,
        productPrice: product.productPrice
      })

    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.productPrice)
    })

  }


}

