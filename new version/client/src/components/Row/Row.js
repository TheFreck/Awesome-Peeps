import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// const Row = props => (
//     <tr>
//         <th scope="row">{props}</th>
//         <td>{props.price}</td>
//         <td>{props.url}</td>
//         <td>{props.occasion}</td>
//         <td>{props.comments}</td>
//         <td><button>Never Mind</button></td>
//         onClick={() => props.deleteItem(props._id)}
//     </tr>
//     );

// export default Row;


const Row = props =>
    <div className="container text-center">
        <div className="card-body">
            <h4 className="text-info">{props.item}</h4>
              <p className="text-center">Price: {props.price}</p>
              <p className="text-center">URL: {props.url}</p>
              <p className="text-center">Occasion: {props.occasion}</p>
              <p className="text-center">Comments: {props.comments}</p>
            <span >
                <button className="btn btn-info ml-1" onClick={() => props.deleteItem(props._id)}>Delete</button>
            </span>
        </div>
        <hr></hr>
    </div>


export default Row;
