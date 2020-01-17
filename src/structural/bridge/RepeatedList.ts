import { ListBehavior } from "./ListBehavior";

export class Repeatedlist implements ListBehavior {
  private list: string[] = [];

  addItem(str: string): void {
    this.list.push(str);
  }

  getItem(index: number): string {
    return this.list[index];
  }

  getSize() {
    return this.list.length;
  }
}
