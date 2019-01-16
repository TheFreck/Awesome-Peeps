import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// const FriendBtn = props => (
//   <button onClick={props.click}>{props.name}</button>
// );

const mappingFunction = p => <li key={p.id}>{p.name}</li>;

render(){
  return <ul>
    {friends.map(p => <li key={p.id}>{p.name}</li>)}
  </ul>;
};

export default FriendBtn;
