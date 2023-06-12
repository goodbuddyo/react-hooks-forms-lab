

import React,{useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

/* ==== shopping list and filter code =====  */
function ShoppingList({items,onItemFormSubmit}) {
  const [selectedCategory,setSelectedCategory]=useState("All");
  const [search,setSearch]=useState("")

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay=items
    .filter((item) => {
      if(item.name.includes(search)) {
        return true;
      } else {
        return false;
      }
    })
    .filter((item) => {
      if(selectedCategory==="All") return true;

      return item.category===selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
