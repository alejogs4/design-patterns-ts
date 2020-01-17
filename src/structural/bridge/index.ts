// Representations
import { NumberList } from "./NumberList";
import { BaseList } from "./BaseList";
// Behaviors
import { Repeatedlist } from "./RepeatedList";
import { UniqueList } from "./UniqueList";

const repeated: Repeatedlist = new Repeatedlist();
const unique: UniqueList = new UniqueList();

repeated.addItem("Alejandro");
repeated.addItem("Carmen");
repeated.addItem("Ary Fernando");
repeated.addItem("Ana");
repeated.addItem("Ana");

unique.addItem("Alejandro");
unique.addItem("Carmen");
unique.addItem("Ary Fernando");
unique.addItem("Ana");
unique.addItem("Ana");

const numberList: NumberList = new NumberList(repeated);
const baseList: BaseList = new BaseList(repeated);

numberList.printList();
baseList.printList();

numberList.behaviour = unique;
baseList.behaviour = unique;

// numberList.printList();
// baseList.printList();