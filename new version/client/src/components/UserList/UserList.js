import React from "react";

const UserList = props => (
  <div className="container text-center">
    <div class="col s12">
      <h1>I'M A GREEDY BASTARD - HERE IS MY LIST</h1>
      <button onClick={props.selectUser} value={props.uuid} data-id={props._id}>
        {props.name}{" "}
      </button>
    </div>
  </div>
);
<<<<<<< HEAD
  

=======
>>>>>>> 027f03cd0914fd7548dd126a4490cfbb479237b0

export default UserList;
