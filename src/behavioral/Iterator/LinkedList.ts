import { Iterator } from "./Iterator";
import { Node } from "./Node";

export class LinkedList<T> implements Iterator<T> {
  private root: Node<T>;
  private currentIteratorNode: Node<T>;
  public length: number = 0;

  constructor(root: T) {
    this.root = new Node(root);
    this.currentIteratorNode = this.root;
  }

  add(value: T): LinkedList<T> {
    let currentNode = this.root;

    while (true) {
      if (!currentNode.next) {
        currentNode.next = new Node(value);
        break;
      }
      currentNode = currentNode.next;
    }

    this.length++;
    return this;
  }

  next(): T {
    const current = this.currentIteratorNode;

    if (!this.currentIteratorNode.next) {
      return this.currentIteratorNode.value;
    }

    this.currentIteratorNode = this.currentIteratorNode.next;
    return current.value;
  }

  hasMore(): boolean {
    return this.currentIteratorNode.next !== null;
  }
}
