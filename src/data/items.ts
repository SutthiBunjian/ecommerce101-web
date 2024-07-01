import { Item } from "../types/Item";

export const dummyData: Item[] = [
  { id: 1, name: "americano", type: "beverage", selected: false },
  { id: 2, name: "bread", type: "snack", selected: false },
  { id: 3, name: "orange juice", type: "juice", selected: false },
  { id: 4, name: "latte", type: "beverage", selected: false },
  { id: 5, name: "coconut juice", type: "juice", selected: false },
  {
    id: 6,
    name: "americano",
    type: "beverage",
    option: "50% Sweet",
    selected: false,
  },
  {
    id: 7,
    name: "latte",
    type: "beverage",
    option: "50% Sweet",
    selected: false,
  },
  {
    id: 8,
    name: "latte",
    type: "beverage",
    option: "25% Sweet",
    selected: false,
  },
];
