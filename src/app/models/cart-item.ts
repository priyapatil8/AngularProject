

import { Product } from "src/app/models/product";

export class CartItem {
    cartId: number;
    productId: number;
    productName;
    quantity: number;
    productPrice: number;

    constructor(id: number, product:Product,qty=1){
        this.cartId= this.cartId;
        this.productId= product.productId;
        this.productName= product.productName;
        this.productPrice = product.productPrice;
        this.quantity = product.quantity;
    }
}
