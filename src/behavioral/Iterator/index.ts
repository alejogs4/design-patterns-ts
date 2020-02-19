import { LinkedList } from "./LinkedList";

const people = new LinkedList<string>("Miguelito");
people
  .add("Jhoan")
  .add("K")
  .add("Alejo");

while (people.hasMore()) {
  const person = people.next();
  console.log(person);
}

const person = people.next();
console.log(person);
