import React from "react";

const UserList = props => (
  <div className="container text-center">
    <div className="card-body">
      {/* <button onClick={() => props.selectUser(props.uuid)} value={props.uuid} data-id={props._id} className="text-info">{props.uuid} </button> */}
      {/* <button className="btn btn-info ml-1"  onClick={() => props.selectUser(props._id)}value={props.uuid}>{props.name} </button> */}
      {/* <button className="btn btn-info ml-1" onClick={() => props.selectUser(props._id)}>{props.name}</button> */}
      <button onClick={props.selectUser} value={props.uuid} data-id={props._id}>
        {props.name}{" "}
      </button>
    </div>
  </div>
);
  


export default UserList;
