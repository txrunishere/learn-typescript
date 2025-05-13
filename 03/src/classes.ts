class Product {
  pName: string
  pPrice: number
  isShipped: boolean
  inCart = false

  constructor (name: string, price: number, isShipped: boolean) {
    this.pName = name
    this.pPrice = price
    this.isShipped = isShipped
  }

  logValue() : [string, number, boolean] {
    return [this.pName, this.pPrice, this.isShipped ]
  }

  addToCart(): void {
    this.inCart = true
  }

  orderedProduct(): string {
    if (this.inCart) {
      return `Order of Product ${this.pName} is placed!`
    } else {
      return "Cart is Empty"
    }
  }
}

const p1 = new Product("Dildo", 699, true);

const productValue = p1.logValue()
p1.addToCart()
console.log(p1.orderedProduct());