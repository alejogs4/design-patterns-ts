import { Product } from "./Products"

export class Paypal {
  sellProducts(products: Product[], orderId: number):number {
    products.forEach(product => {
      console.log(`Selling product ${product.name} with order id of ${orderId}`)
    })
    return products.length * orderId
  }
}