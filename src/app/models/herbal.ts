export class Herbal {
    productId: number;
    productName: string;
    productPrice: number;
    description: string;
    image: string;

    constructor(productId,productName="",productPrice=0, description="",image=""){

        this.productId = productId;
        this.productName= productName;
        this.productPrice = productPrice;
        this.description = description;
        this.image = image;
  }

}
