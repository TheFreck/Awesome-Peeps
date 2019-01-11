import React from "react";
import "../FindOnlineBtn/FindOnlineBtn.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const FindOnlineBtn = props => (
  <button onClick={props.click}>{props.name}</button>
);

export default FindOnlineBtn;



