import { Manager } from "./Manager";
import { Adviser } from "./Adviser";
import { Coordinator } from "./Coordinator";

const manager = new Manager();
const coordinator = new Coordinator(manager);
const adviser = new Adviser(coordinator);

console.log(adviser.authorize(200))
