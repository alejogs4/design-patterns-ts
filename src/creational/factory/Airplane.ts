import { Transport } from './Transport'

export class Airplane implements Transport {
  deliver(product: string) {
    console.log(`Delivering product ${product} by air`)
  }
}