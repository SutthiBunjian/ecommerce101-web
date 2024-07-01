import { useState } from "react";
import { Item } from "../types/Item";
import { dummyData } from "../data/items";

export default function useTodo() {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>(dummyData);

  const handleSelectedChange = (item: Item, selected: boolean) => {
    if (selected) {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((itemId) => itemId.id !== item.id)
      );
    }
  };

  const saveSelectedItem = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filteredItem = selectedItems.map(({ selected, ...rest }) => rest);
    localStorage.setItem("selectedItems", JSON.stringify(filteredItem));
    alert("Selected items saved to localStorage!");
  };

  const deleteItems = () => {
    localStorage.removeItem("selectedItems");
    setSelectedItems([]);
    alert("Selected items cleared from localStorage!");
  };

  const handleSearch = (name: string) => {
    const filtered = dummyData.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filtered);
    setFilteredItems(filtered);
  };
  return {
    handleSelectedChange,
    saveSelectedItem,
    deleteItems,
    handleSearch,
    selectedItems,
    filteredItems,
  };
}
