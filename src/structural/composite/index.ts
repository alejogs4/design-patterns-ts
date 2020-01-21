import { Project } from "./Project";
import { ToDo } from "./Todo";

const semester = new Project("Win my subjects")
const books = new Project("List of books")

books.addChilds(new ToDo("Buy IA Book"))
books.addChilds(new ToDo("Buy IO Book"))

semester.addChilds(books)
semester.addChilds(new ToDo("Study one hour"))
semester.addChilds(new ToDo("Focus better"))

semester.print()