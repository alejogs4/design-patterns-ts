import { ListRepresentation } from "./ListRepresentation";

export class NumberList extends ListRepresentation {
  printList() {
    for (let i = 0; i < this._behaviour.getSize(); i++) {
      console.log(`${i + 1} ${this._behaviour.getItem(i)}`);
    }
  }
}
