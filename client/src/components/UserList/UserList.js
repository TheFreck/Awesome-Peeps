import React from "react";

const UserList = props => (
  <div className="container text-center">

    <div className="col s12">
      <button
        onClick={() => props.selectUser({
          uuid: props.uuid,
          firstName: props.firstName
        })}
        value={props.uuid}
        data-id={props._id}>
        {props.firstName} {props.lastName}
      </button>
    </div>
  </div>
);

export default UserList;