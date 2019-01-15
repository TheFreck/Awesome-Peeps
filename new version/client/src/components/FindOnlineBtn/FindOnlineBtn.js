import React from "react";
import "../FindOnlineBtn/FindOnlineBtn.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const FindOnlineBtn = props => (
  <form action="http://www.google.com/search" method="get">
	<input type="text" class="itemInput" name="q" value="{props.item}" />
	<input type="submit" id="online" target="_blank" value="Find Me Online" />
	</form>
);

export default FindOnlineBtn;



