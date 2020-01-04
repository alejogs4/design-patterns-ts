import { Transport } from './Transport'

export class Truck implements Transport {
  deliver(product: string) {
    console.log(`Delivering product ${product} by ground`)
  }
}