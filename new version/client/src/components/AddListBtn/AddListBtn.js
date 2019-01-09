import React from "react";
import "../AddListBtn.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AddListButton = props => (
  <button type="submit" className="btn btn-primary">Add Item</button>
);

export default AddListButton;
