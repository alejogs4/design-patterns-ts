import { Product } from "./Products";
import { SellFacade } from "./SellFacade";

const sell: SellFacade = new SellFacade();

const products: Product[] = [
  { name: "Celery", price: 2000, category: "Vegetables" },
  { name: "Lentil", price: 5000, category: "Vegetables" },
  { name: "Lentil", price: 5000, category: "Vegetables" }
];

sell.executeSell(products, 30);
