import React from "react";

const UserList = props => (
  <div className="container text-center">

    <div className="col s12">
<<<<<<< HEAD
      <button
        onClick={() => props.selectUser({
          uuid: props.uuid,
          firstName: props.firstName
        })}
        value={props.uuid}
        data-id={props._id}>
        {props.firstName}
=======
      <h1>I'M A GREEDY BASTARD - HERE IS MY LIST</h1>
      <button onClick={props.selectUser} value={props.uuid} data-id={props._id}>
        {props.name}{" "}
>>>>>>> master
      </button>
    </div>
  </div>
);

export default UserList;