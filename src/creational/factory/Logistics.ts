// Product
import { Transport } from './Transport'
// Concrete products
import { Airplane } from './Airplane'
import { Truck } from './Truck'
import { Ship } from './Ship'

// Creator
export class Logistics {

  private canGetBySea(latitude: number, longitude: number): boolean {
    return (latitude - longitude < 0) && latitude > 5
  }

  private canGetByGround(latitude: number, longitude: number) {
    return latitude - longitude > 0
  }

  getTransport(coordinates: [number, number]): Transport {
    if (this.canGetByGround(coordinates[0], coordinates[1])) {
      return new Truck()
    } else if (this.canGetBySea(coordinates[0], coordinates[1])) {
      return new Ship()
    }
    return new Airplane()
  }
}