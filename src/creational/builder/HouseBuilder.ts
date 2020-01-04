import { House } from './House'

export interface HouseBuilder {
  reset() : HouseBuilder
  setDoors(doors: number): HouseBuilder
  setBathrooms(bathrooms: number): HouseBuilder
  setPool(pool: boolean): HouseBuilder
  setGarage(garage: boolean): HouseBuilder
  getHouse(): House
}