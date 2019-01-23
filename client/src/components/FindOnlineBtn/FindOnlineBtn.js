import React from "react";
import "../FindOnlineBtn/FindOnlineBtn.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const FindOnlineBtn = props => { 
  return (<a href={"http://www.google.com/search?source=hp&ei=1XZBXJKpEammjwSG4KGgBQ&q=" + props.name } target="blank" ><button type="submit" className="btn pink lighten-1 z-depth-2">Find Online</button></a>
)
}

export default FindOnlineBtn;