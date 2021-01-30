export class Product {

    productId: number;
    productName: string;
    productPrice: number;
    description: string;
    image: string;
    categoryId: number;
    quantity: number;

    constructor(productId, productName="", productPrice=0 ,description="", image="https://images-na.ssl-images-amazon.com/images/I/81keH8wn5sL._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",categoryId){
      
        this.productId= productId;
        this.productName= productName;
        this.productPrice = productPrice;
        this.description = description;
        this.image=image;
        this.categoryId = categoryId;

    }
}
