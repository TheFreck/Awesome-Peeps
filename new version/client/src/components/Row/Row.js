import React from "react";

const Row = props => (


  <div>
  <div className="container">
    <div className="card">
      <div className="card-header">
       {props.item}
      </div>
      <div className="card-body">
        {props.url}
        {props.price}
      </div>
      <div className="card-footer">
      <span>
        <button
          className="btn btn-info ml-1"
          onClick={() => props.deleteItem(props._id)}
        >
          Delete
        </button>
      </span>
      </div>
    </div>
  </div>
</div>
 
);





export default Row;
