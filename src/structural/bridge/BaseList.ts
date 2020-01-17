import { ListRepresentation } from "./ListRepresentation"

export class BaseList extends ListRepresentation {
  printList() {
    for (let i = 0; i < this._behaviour.getSize(); i++) {
      console.log(this._behaviour.getItem(i))
    }
  }
}