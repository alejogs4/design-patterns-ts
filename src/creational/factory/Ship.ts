import { Transport } from './Transport'

export class Ship implements Transport {
  deliver(product: string) {
    console.log(`Delivering product ${product} by sea`)
  }
}