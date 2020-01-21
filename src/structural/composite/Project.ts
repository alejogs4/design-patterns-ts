import { ProjectItem } from "./ProjectItem";

export class Project implements ProjectItem {
  private children: ProjectItem[] = [];

  constructor(private name: string) {}

  addChilds(child: ProjectItem) {
    this.children.push(child);
  }

  print() {
    console.log(`Project: ${this.name}`);

    this.children.forEach(item => {
      item.print();
    });
  }
}
