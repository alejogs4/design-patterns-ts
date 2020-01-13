import { Product } from "./Products";
import { Customer } from "./Customer";
import { Order } from "./Order";
import { Paypal } from "./Paypal";
import { Bank } from "./Bank";

export class SellFacade {
  executeSell(products: Product[], userId: number) {
    const user: Customer = new Customer(userId);

    if (user.verifyUserId()) {
      const order: number = Order.generateOrder(products);
      const paypal: Paypal = new Paypal();
      const paypalVoucher: number = paypal.sellProducts(products, order);
      const bank: Bank = new Bank()
      bank.receiveMoney(paypalVoucher)
    } else {
      console.log(`User with id ${userId} doesn't exists`)
    }
  }
}
