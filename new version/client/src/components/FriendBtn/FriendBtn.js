import React from "react";

<<<<<<< HEAD
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
=======
const FriendBtn = props => (
  <div className="container text-center">
    <div className="col s12">
      {/* <h1>I'M A GREEDY BASTARD - HERE IS MY LIST</h1> */}
      <button onClick={props.selectUser} value={props.uuid} data-id={props._id}>
        {props.name}
      </button>
    </div>
  </div>
);
>>>>>>> master

export default FriendBtn;
// export const users = ({ children }) => {
//   return (
//     <div className="users-overflow-container">
//       <ul className="users-group">
//         {children}
//       </ul>
//     </div>
//   );
// };