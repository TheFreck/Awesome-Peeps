import React from "react";

const UserList = props => (
  <div className="container text-center">
    <div class="col s12">
      {/* <h1>I'M A GREEDY BASTARD - HERE IS MY LIST</h1> */}
      <button onClick={props.selectUser} value={props.uuid} data-id={props._id}>
        {props.name}{" "}
      </button>
    </div>
  </div>
);

export default UserList;
