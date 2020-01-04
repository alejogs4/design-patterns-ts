// Builder interface
import { HouseBuilder } from './HouseBuilder'
// Product
import { House } from './House'

export class ConcreteHouseBuilder implements HouseBuilder {
  private house: House

  constructor() {
    this.house = new House()
  }

  reset() {
    this.house = new House()
    return this
  }

  setDoors(doors: number) {
    this.house.doors = doors
    return this
  }

  setBathrooms(bathrooms: number) {
    this.house.bathrooms = bathrooms
    return this
  }

  setPool(pool: boolean) {
    this.house.pool = pool
    return this
  }

  setGarage(garage: boolean) {
    this.house.garage = garage
    return this
  }

  getHouse() {
    return this.house
  }
}

