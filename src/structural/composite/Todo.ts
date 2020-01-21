import { ProjectItem } from "./ProjectItem";

export class ToDo implements ProjectItem {
  constructor(private name: string) {}

  print() {
    console.log(`Project: ${this.name}`);
  }
}