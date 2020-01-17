import { ListBehavior } from "./ListBehavior";

export abstract class ListRepresentation {
  constructor(protected _behaviour: ListBehavior) {}

  set behaviour(behavior: ListBehavior) {
    this._behaviour = behavior
  }

  abstract printList(): void;
}
