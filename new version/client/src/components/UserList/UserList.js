import React from "react";

const UserList = props =>
    <div className="container text-center">
    
        <div className="card-body">
            <h4 className="text-info">{props.name}</h4>
        </div>
        <hr></hr>
    </div>


export default UserList;
