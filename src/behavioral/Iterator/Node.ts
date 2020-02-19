export class Node<T> {
  private _next: Node<T> | null;

  constructor(private _value: T) {
    this._next = null;
  }

  get next(): Node<T> | null {
    return this._next;
  }

  get value() {
    return this._value;
  }

  set next(next: Node<T> | null) {
    this._next = next;
  }

  set value(value: T) {
    this._value = value;
  }
}
