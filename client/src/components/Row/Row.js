import React from "react";

const Row = props => (


  <div className="popover">
  <button className="btn btn-primary">{props.item}</button>
  <div className="popover-container">
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
  // <div className="popover container text-center">
  //   <div className="card-body">
  //     <h4 className="text-info">{props.item}</h4>
  //     <p className="text-center">Price: {props.price}</p>
  //     <p className="text-center">URL: {props.url}</p>
  //     <p className="text-center">Occasion: {props.occasion}</p>
  //     <p className="text-center">Comments: {props.comments}</p>
  //     <span>
  //       <button
  //         className="btn btn-info ml-1"
  //         onClick={() => props.deleteItem(props._id)}
  //       >
  //         Delete
  //       </button>
  //     </span>
  //   </div>
  //   <hr />
  // </div>
);





export default Row;
