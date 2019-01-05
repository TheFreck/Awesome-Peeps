import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AddListButton = props => (
  <button onClick={props.click}>{props.name}</button>
);

export default AddListButton;
