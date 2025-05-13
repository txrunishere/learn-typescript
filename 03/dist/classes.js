"use strict";
class Product {
    pName;
    pPrice;
    isShipped;
    inCart = false;
    constructor(name, price, isShipped) {
        this.pName = name;
        this.pPrice = price;
        this.isShipped = isShipped;
    }
    logValue() {
        return [this.pName, this.pPrice, this.isShipped];
    }
    addToCart() {
        this.inCart = true;
    }
    orderedProduct() {
        if (this.inCart) {
            return `Order of Product ${this.pName} is placed!`;
        }
        else {
            return "Cart is Empty";
        }
    }
}
const p1 = new Product("Dildo", 699, true);
const productValue = p1.logValue();
p1.addToCart();
console.log(p1.orderedProduct());
