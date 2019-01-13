import React from "react";

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