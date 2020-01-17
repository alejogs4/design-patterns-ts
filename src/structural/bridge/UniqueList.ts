import { ListBehavior } from "./ListBehavior";

export class UniqueList implements ListBehavior {
  private list: Array<string> = [];

  addItem(str: string): void {
    if (this.list.indexOf(str) === -1) {
      this.list.push(str);
    }
  }

  getItem(index: number): string {
    return this.list[index];
  }

  getSize(): number {
    return this.list.length;
  }
}
