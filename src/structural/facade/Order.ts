import { Product } from "./Products"

export class Order {
  static generateOrder(products: Array<Product>): number {
    const orderId = Math.round(Math.random() * products.length)
    return orderId
  }
}