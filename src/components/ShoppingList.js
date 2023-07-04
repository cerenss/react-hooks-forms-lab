import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [selectCategoryToAdd, setSelectCategoryToAdd] = useState("Produce");
  const [newItems, setNewItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectCategoryToAdd(event.target.value);
  }


  function onItemFormSubmit(event) {
    event.preventDefault();
     const newItem = {
      id: uuid(),
      name: input,
      category: selectCategoryToAdd,
    }
    const itemsToDisplay = [...newItems, newItem];


    setNewItems(itemsToDisplay);
    setInput(""); 
    setSelectCategoryToAdd("Produce");
  }

  const updatedItemsToDisplay = newItems
  .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
  })
  .filter((item) => item.name.includes(search))
  




  return (
    <div className="ShoppingList">
      <ItemForm onInputChange={handleInputChange} onSelectChange={handleSelectChange} onItemFormSubmit={onItemFormSubmit} input={input} selectCategoryToAdd={selectCategoryToAdd}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {updatedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
