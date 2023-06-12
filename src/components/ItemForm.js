

import React,{useState} from "react";
import {v4 as uuid} from "uuid";
// to generate a unique id

function ItemForm({onItemFormSubmit}) {

  const [itemName,setItemName]=useState("");
  const [itemCategory,setItemCategory]=useState("Produce");

  function handleSubmit(event) {
    event.preventDefault()
    //console.log(itemName.value)
    // newItem def is from the instructions
    const newItem={
      id: uuid(), //  to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    if(onItemFormSubmit) {
      onItemFormSubmit(newItem)
    } else {
      console.log("sorry no onItemFormSubmit");
    }
    if(newItem) {
      console.log(newItem.name);
    }

  }

  return (
    <form className="NewItem" name="foodForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="itemName" value={itemName.value}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select name="category"
          onChange={e => setItemCategory(e.target.value)} >
          {/*<select name="category" onChange={e => setName(e.target.value)} />*/}
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

