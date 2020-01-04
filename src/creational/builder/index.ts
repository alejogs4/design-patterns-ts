import { House } from './House'
import { HouseBuilder } from './HouseBuilder'
import { ConcreteHouseBuilder } from './ConcreteHouseBuilder'

const builder: HouseBuilder = new ConcreteHouseBuilder()
const beachHouse: House = builder
  .reset()
  .setBathrooms(2)
  .setDoors(1)
  .setGarage(true)
  .setPool(false)
  .getHouse()

const normalHouse: House = builder
  .reset()
  .setBathrooms(3)
  .setDoors(2)
  .setGarage(true)
  .setPool(true)
  .getHouse()

console.log(beachHouse, normalHouse)
