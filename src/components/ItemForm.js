import React from "react";


function ItemForm({ onInputChange, onSelectChange, onItemFormSubmit, input, selectCategoryToAdd }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onInputChange} value={input}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onSelectChange} value={selectCategoryToAdd}>
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
