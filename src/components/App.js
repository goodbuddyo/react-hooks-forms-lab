import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

//  controlled components lab 
function App() {
  const [items,setItems]=useState(itemData);
  const [isDarkMode,setIsDarkMode]=useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  if(false==true) {
    setItems([...items,null])
  } // to get rid of non use warning

  function addElement(brandNewItem) {
    const updatedItems=[...items,brandNewItem]
    setItems(updatedItems);
  }

  return (
    <div className={"App "+(isDarkMode? "dark":"light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={addElement} />
    </div>
  );
}

export default App;

// App ( *items, *isDarkMode )
  // Header ( isDarkMode )
  // Shoppinglist ( items, *selectedCategory, *search )
  //   ItemForm ( items, *itemCategory )
  //   Filter (search, onCategoryChange, onSearchChange)
  //   Item ( *isInCart )

